import styled from 'styled-components'

export const PictureContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  padding: 5px;
`

export const PhotoCard = styled.div`
  width: 100%;
  height: 200px;
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
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
  }

  h2 {
    position: relative;
    z-index: 1;
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

  z-index: 2;
  backdrop-filter: blur(4px);

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`
