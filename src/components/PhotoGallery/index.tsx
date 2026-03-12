import { useEffect, useState } from 'react'
import { db, collection, onSnapshot, query, orderBy } from '../../lib/firebase'
import {
  BackButton,
  Header,
  HeaderTitle,
  PhotoCard,
  PictureContainer
} from './styles'

import header from '../../assets/teste.jpg'
import { useNavigate } from 'react-router-dom'

interface Photo {
  url: string
  caption?: string
}

export function PhotoGallery() {
  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(() => {
    const q = query(collection(db, 'photos'), orderBy('createdAt', 'desc'))

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map((doc) => {
        const data = doc.data()
        return {
          url: data.url as string,
          caption: data.caption || ''
        }
      })

      console.log('Fotos do firestore:', items)

      setPhotos(items)
    })

    return () => unsubscribe()
  }, [])

  const navigate = useNavigate()

  return (
    <div>
      <Header style={{ backgroundImage: `url(${header})` }}>
        <BackButton onClick={() => navigate('/camera')}>← Voltar</BackButton>

        <HeaderTitle>
          <h1>Sara & Davi</h1>
        </HeaderTitle>
      </Header>

      <PictureContainer>
        {photos.length === 0 ? (
          <p style={{ textAlign: 'center', marginTop: 40 }}>
            📸 Nenhuma foto ainda
          </p>
        ) : (
          photos.map((photo, idx) => (
            <PhotoCard key={idx}>
              <img src={photo.url} alt="capturada" loading="lazy" />
            </PhotoCard>
          ))
        )}
      </PictureContainer>
    </div>
  )
}
