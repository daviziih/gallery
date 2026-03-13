import { useEffect, useState } from 'react'
import { db, collection, onSnapshot, query, orderBy } from '../../lib/firebase'
import { BackButton, Header, PhotoCard, PictureContainer } from './styles'

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
        <div>
          <h1>Sara & Davi</h1>
          <p>📸 Momentos que valem mil palavras</p>
        </div>
        <span className="icon">📷</span> {/* ícone discreto no topo direito */}
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

      {/* <PictureContainer>
        {photos.length === 0 ? (
          <p style={{ textAlign: 'center', marginTop: 40 }}>
            📸 Nenhuma foto ainda
          </p>
        ) : (
          <Masonry columns={3} gap={5}>
            {photos.map((photo, idx) => {
              return (
                <PhotoCard key={idx}>
                  <img src={photo.url} alt="capturada" loading="lazy" />
                </PhotoCard>
              )
            })}
          </Masonry>
        )}
      </PictureContainer> */}
    </div>
  )
}
