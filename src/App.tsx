import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Camera from './pages/Camera'
import Gallery from './pages/Gallery'
import { GlobalStyles } from './globalStyles'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </div>
  )
}
