import { useNavigate } from 'react-router-dom'
import {
  Container,
  Content,
  Couple,
  Date,
  Divider,
  EnterButton,
  Phrase
} from '.'

import background from '../assets/img.jpeg'

export default function Home() {
  const navigate = useNavigate()

  return (
    <Container background={background}>
      <Content>
        <Couple>Sara & Davi</Couple>

        <Phrase>
          Um álbum compartilhado para registrar todos os momentos do nosso
          grande dia.
        </Phrase>

        <Divider />

        <EnterButton onClick={() => navigate('/camera')}>
          📸 Ver Álbum
        </EnterButton>
        <Date>28 • Março • 2026</Date>
      </Content>
    </Container>
  )
}
