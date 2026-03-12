import { useState } from 'react'
import {
  storage,
  ref,
  uploadString,
  db,
  collection,
  addDoc
} from '../lib/firebase'
import { CameraCapture } from '../components/Capture'

export default function Camera() {
  const [uploading, setUploading] = useState(false)

  const handleCapture = async (imageData: string, caption: string) => {
    setUploading(true)
    const filename = `photo-${crypto.randomUUID()}.jpg`

    const imageRef = ref(storage, 'photos/' + filename)

    try {
      await uploadString(imageRef, imageData, 'data_url')

      const downloadURL = `https://firebasestorage.googleapis.com/v0/b/${
        imageRef.bucket
      }/o/${encodeURIComponent(imageRef.fullPath)}?alt=media`

      await addDoc(collection(db, 'photos'), {
        url: downloadURL,
        caption,
        createdAt: new Date()
      })
    } catch (error) {
      alert('Erro ao salvar imagem')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      <CameraCapture onCapture={handleCapture} />
      {uploading}
    </div>
  )
}
