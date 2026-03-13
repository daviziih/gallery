import styled from 'styled-components'

export const PictureContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  padding: 5px;
`

export const PhotoCard = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  background: #eee;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Header = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;

  /* camadas de gradiente e luz */

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

  div {
    position: relative;
    z-index: 3;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
    color: white;
    text-align: left;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    line-height: 1.2;
  }

  p {
    font-size: 0.95rem;
    margin-top: 5px;
    opacity: 0.9;
  }

  /* ícones flutuantes discretos */
  .icon {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 1.2rem;
    opacity: 0.7;
    z-index: 4;
  }
`

export const HeaderTitle = styled.h2`
  color: white;
  font-size: 1rem;
  font-weight: 600;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
`

export const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;

  padding: 8px 16px;

  background: rgba(255, 255, 255, 0.08);
  color: #fff;

  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 30px;

  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.5px;

  cursor: pointer;
  z-index: 5;

  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  transition: all 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.18);
    border-color: #fff;
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.97);
  }
`
