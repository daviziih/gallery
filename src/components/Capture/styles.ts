import styled from 'styled-components'

//Novo
export const CaptureButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;

  width: 60px;
  height: 60px;

  border-radius: 50%;
  border: none;
  background: white;

  cursor: pointer;
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
  width: 60px;
  height: 60px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  font-weight: bold;

  background: rgba(255, 255, 255, 0.08);
  color: #fff;

  border: 2px solid rgba(255, 255, 255, 0.7);

  cursor: pointer;

  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: #fff;
  }

  &:active {
    transform: scale(0.92);
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

  padding: 8px 14px;

  background: transparent;
  color: #fff;

  border: 1.5px solid #fff;
  border-radius: 20px;

  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.3px;

  cursor: pointer;

  transition: all 0.2s ease;

  z-index: 10;

  &:hover {
    background: #fff;
    color: #000;
  }

  &:active {
    transform: scale(0.95);
  }
`

export const CaptureWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
`

export const ProgressRing = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-90deg);
`
