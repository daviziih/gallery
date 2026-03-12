import { useEffect, useRef, useState } from 'react'
import {
  ActionButton,
  CameraControls,
  CaptureButton,
  GalleryButton,
  PictureWrapper,
  PreviewControls,
  SwitchCameraButton,
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

  const [facingMode, setFacingMode] = useState<'user' | 'environment'>(
    'environment'
  )
  const [preview, setPreview] = useState<string | null>(null)
  const [caption, setCaption] = useState('')

  const navigate = useNavigate()

  // Inicia a câmera automaticamente ao carregar
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
          frameRate: { ideal: 30 }
        },
        audio: false
      })

      streamRef.current = stream

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play()
      }

      // Tenta ativar foco e exposição contínuos se suportados
      const track = stream.getVideoTracks()[0]
      const capabilities = track.getCapabilities() as any // cast para "any" evita erro TS
      const constraints: any = {}

      if (capabilities.focusMode?.includes('continuous')) {
        constraints.advanced = [{ focusMode: 'continuous' }]
      }
      if (capabilities.exposureMode?.includes('continuous')) {
        if (!constraints.advanced) constraints.advanced = []
        constraints.advanced.push({ exposureMode: 'continuous' })
      }

      if (constraints.advanced?.length) {
        await track.applyConstraints(constraints)
      }
    } catch (error) {
      console.error('Erro ao acessar câmera:a', error)
    }
  }

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null
    }
  }

  const handleCapture = () => {
    if (!videoRef.current) return

    const canvas = document.createElement('canvas')
    canvas.width = videoRef.current.videoWidth
    canvas.height = videoRef.current.videoHeight

    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height)
      const dataUrl = canvas.toDataURL('image/jpeg', 1.0) // qualidade máxima
      setPreview(dataUrl)
      stopCamera()
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
          <PictureWrapper src={preview} alt="Pré-visualização" />
          <PreviewControls>
            <ActionButton onClick={handleDiscard}>✖</ActionButton>
            <ActionButton onClick={handleSave}>✔</ActionButton>
          </PreviewControls>
        </>
      ) : (
        <>
          <Video ref={videoRef} autoPlay playsInline muted />

          <CameraControls>
            <CaptureButton onClick={handleCapture} />
            <SwitchCameraButton
              onClick={() =>
                setFacingMode(facingMode === 'user' ? 'environment' : 'user')
              }
            >
              🔄
            </SwitchCameraButton>
          </CameraControls>
        </>
      )}
    </VideoWrapper>
  )
}
