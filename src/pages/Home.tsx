import { useNavigate } from 'react-router-dom'
import { Background, Container, Content, EnterButton, Subtitle, Title } from '.'

import background from '../assets/img.jpeg'

export default function Home() {
  const navigate = useNavigate()

  return (
    <Container>
      <Background style={{ backgroundImage: `url(${background})` }} />

      <Content>
        <Title>Sara & Davi</Title>

        <Subtitle>
          Um álbum compartilhado para registrar todos os momentos do nosso
          grande dia.
        </Subtitle>

        <EnterButton onClick={() => navigate('/camera')}>
          Acessar Álbum
        </EnterButton>
      </Content>
    </Container>
  )
}
