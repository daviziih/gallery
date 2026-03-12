import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  position: relative;
  overflow: hidden;
`

export const Background = styled.div`
  position: absolute;
  inset: 0;

  background-size: cover;
  background-position: center;

  filter: blur(4px);
  transform: scale(1.05);
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;

  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.65));
`

export const Content = styled.div`
  position: relative;
  z-index: 2;

  height: 100%;
  padding: 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  color: white;
`

export const Title = styled.h1`
  font-size: 42px;
  margin-bottom: 12px;

  @media (max-width: 480px) {
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  font-size: 16px;
  max-width: 320px;
  line-height: 1.5;
  margin-bottom: 30px;
  opacity: 0.9;
`

export const EnterButton = styled.button`
  padding: 14px 28px;
  font-size: 16px;
  border-radius: 10px;
  border: none;

  background: white;
  color: #000;

  font-weight: 600;

  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    transform: scale(1.05);
  }
`
