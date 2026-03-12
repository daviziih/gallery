import styled from 'styled-components'

//Novo
export const CaptureButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: red;
  border: 6px solid #e5e5e5;
  cursor: pointer;
  transition: transform 0.1s;

  &:active {
    transform: scale(0.9);
  }
`
// Novo
export const SwitchCameraButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;

  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`

//Novo
export const CameraControls = styled.div`
  position: absolute;
  bottom: 30px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`
//Novo
export const ActionButton = styled.button`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
  font-weight: bold;

  background: rgba(0, 0, 0, 0.7);
  color: white;

  cursor: pointer;
  transition: transform 0.1s;

  &:active {
    transform: scale(0.9);
  }
`

export const PreviewControls = styled.div`
  position: absolute;
  bottom: 30px;
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 40px;
`

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;

  overflow: hidden;
`

export const PictureWrapper = styled.img`
  position: relative;

  width: 100%;
  height: 100vh;
  object-fit: cover;
`

export const Video = styled.video`
  position: relative;

  width: 100%;
  height: 100vh;
  object-fit: cover;
`

export const GalleryButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  padding: 10px 16px;
  border-radius: 8px;
  border: none;

  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 14px;
  font-weight: 500;

  cursor: pointer;
  backdrop-filter: blur(4px);

  transition: transform 0.1s;

  z-index: 10;
`
