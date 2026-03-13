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

// export const PictureContainer = styled.div`
//   column-count: 3; /* número de colunas */
//   column-gap: 10px; /* espaço entre colunas */
//   padding: 10px;

//   @media (max-width: 1024px) {
//     column-count: 2;
//   }

//   @media (max-width: 600px) {
//     column-count: 1;
//   }
// `

// export const PhotoCard = styled.div`
//   break-inside: avoid; /* evita que a imagem quebre entre colunas */
//   margin-bottom: 10px;
//   overflow: hidden;
//   width: 100%;

//   img {
//     width: 100%;
//     display: block;
//     object-fit: cover; /* preenche o card sem distorcer */
//   }
// `

export const Header = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;

  /* camadas de gradiente e luz */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5));
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at top right,
      rgba(255, 255, 255, 0.1),
      transparent 60%
    );
    z-index: 2;
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

  padding: 8px 14px;
  border-radius: 8px;
  border: none;

  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 14px;
  cursor: pointer;

  z-index: 5;
  backdrop-filter: blur(4px);

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`
