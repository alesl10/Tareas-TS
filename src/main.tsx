import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { ColorProvider } from './context/ColorContext.tsx'
import Inicio from './components/Inicio.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ColorProvider>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/home' element={<App />} />
        </Routes>
      </ColorProvider>
    </BrowserRouter>
  </StrictMode>,
)
