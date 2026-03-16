import { useEffect, useRef, useState } from 'react'
import {
  ActionButton,
  CameraControls,
  CaptureButton,
  CaptureWrapper,
  GalleryButton,
  PictureWrapper,
  PreviewControls,
  ProgressRing,
  Video,
  VideoWrapper
} from './styles'
import { useNavigate } from 'react-router-dom'

export function CameraCapture({
  onCapture
}: {
  onCapture: (img: string, caption: string) => void
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])
  const pressTimer = useRef<number | null>(null)
  const recordTimeout = useRef<number | null>(null)
  const [progress, setProgress] = useState(0)
  const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null)

  const [preview, setPreview] = useState<string | null>(null)
  const [caption, setCaption] = useState('')
  const [recording, setRecording] = useState(false)

  const navigate = useNavigate()

  const [facingMode] = useState<'user' | 'environment'>('environment')

  useEffect(() => {
    startCamera()
    return () => stopCamera()
  }, [facingMode])

  const startCamera = async () => {
    try {
      stopCamera()

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode,
          width: { ideal: 3840 },
          height: { ideal: 2160 },
          frameRate: { ideal: 60 }
        },
        audio: true
      })

      streamRef.current = stream

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play()
      }
    } catch (error) {
      console.error('Erro ao acessar câmera:', error)
    }
  }

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }
    if (videoRef.current) videoRef.current.srcObject = null
  }

  // FOTO
  const handleCapture = () => {
    if (!videoRef.current) return

    const canvas = document.createElement('canvas')
    canvas.width = videoRef.current.videoWidth
    canvas.height = videoRef.current.videoHeight

    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height)

      canvas.toBlob(
        (blob) => {
          if (!blob) return
          const url = URL.createObjectURL(blob)
          setPreview(url)
        },
        'image/jpeg',
        1
      )
    }

    stopCamera()
  }

  // VIDEO
  const startRecording = () => {
    if (!streamRef.current) return

    setProgress(0)

    progressInterval.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100
        return prev + 100 / 30
      })
    }, 1000)

    const recorder = new MediaRecorder(streamRef.current, {
      mimeType: 'video/webm'
    })

    chunksRef.current = []

    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunksRef.current.push(e.data)
    }

    recorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: 'video/webm' })
      const url = URL.createObjectURL(blob)
      setPreview(url)
    }

    recorder.start()
    mediaRecorderRef.current = recorder
    setRecording(true)

    // limite 30s
    recordTimeout.current = setTimeout(() => {
      stopRecording()
    }, 30000)
  }

  const stopRecording = () => {
    if (!mediaRecorderRef.current) return

    mediaRecorderRef.current.stop()
    setRecording(false)

    if (recordTimeout.current) {
      clearTimeout(recordTimeout.current)
      recordTimeout.current = null
    }

    if (progressInterval.current) {
      clearInterval(progressInterval.current)
      progressInterval.current = null
    }

    setProgress(0)

    stopCamera()
  }

  // SEGURAR BOTÃO
  const handlePressStart = () => {
    pressTimer.current = setTimeout(() => {
      startRecording()
    }, 300)
  }

  const radius = 36
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  const handlePressEnd = () => {
    if (pressTimer.current) {
      clearTimeout(pressTimer.current)
      pressTimer.current = null
      if (!recording) handleCapture()
    }

    if (recording) {
      stopRecording()
    }
  }

  const handleSave = () => {
    if (preview) {
      onCapture(preview, caption)
      setPreview(null)
      setCaption('')
      startCamera()
    }
  }

  const handleDiscard = () => {
    setPreview(null)
    setCaption('')
    startCamera()
  }

  return (
    <VideoWrapper>
      <GalleryButton onClick={() => navigate('/gallery')}>
        Ver Galeria
      </GalleryButton>

      {preview ? (
        <>
          {preview.includes('blob:') ? (
            <PictureWrapper src={preview} />
          ) : (
            <PictureWrapper src={preview} alt="Pré-visualização" />
          )}

          <PreviewControls>
            <ActionButton onClick={handleDiscard}>✖</ActionButton>
            <ActionButton onClick={handleSave}>✔</ActionButton>
          </PreviewControls>
        </>
      ) : (
        <>
          <Video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            style={{ objectFit: 'cover' }}
          />

          <CameraControls>
            <CaptureWrapper>
              <ProgressRing width="80" height="80">
                <circle
                  cx="40"
                  cy="40"
                  r={radius}
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="4"
                  fill="transparent"
                />

                <circle
                  cx="40"
                  cy="40"
                  r={radius}
                  stroke="red"
                  strokeWidth="4"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                />
              </ProgressRing>

              <CaptureButton
                onMouseDown={handlePressStart}
                onMouseUp={handlePressEnd}
                onTouchStart={handlePressStart}
                onTouchEnd={handlePressEnd}
              />
            </CaptureWrapper>
          </CameraControls>
        </>
      )}
    </VideoWrapper>
  )
}
