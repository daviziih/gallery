import styled from 'styled-components'

export const Container = styled.div<{ background: string }>`
  width: 100%;
  height: 95vh;
  overflow: hidden;
  background-image: url(${(p) => p.background});
  background-size: cover;
  background-position: center;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  /* camada de profundidade */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.65) 100%
    );
  }
`

export const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding: 20px;
`

export const Couple = styled.h1`
  font-size: 2.6rem;
  font-weight: 600;
  margin: 0;
  letter-spacing: 1px;
`

export const Phrase = styled.p`
  margin-top: 12px;
  font-size: 1rem;
  opacity: 0.9;
`

export const Divider = styled.div`
  width: 60px;
  height: 2px;
  background: white;
  margin: 10px auto;
  opacity: 0.6;
`

export const EnterButton = styled.button`
  margin-top: 30px;
  padding: 14px 32px;

  background: transparent;
  color: white;

  border: 1px solid white;
  border-radius: 30px;

  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;

  backdrop-filter: blur(2px); /* leve efeito vidro */
`

export const Date = styled.span`
  display: block;
  margin-top: 25px;
  font-size: 1rem;
  opacity: 0.8;
`
