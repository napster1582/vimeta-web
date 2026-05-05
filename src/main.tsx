import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Privacidad from './pages/Privacidad'
import Terminos from './pages/Terminos'
import './styles/base.css'
import './styles/sections.css'
import './styles/cases.css'
import './styles/contact.css'
import './styles/modal.css'
import './styles/legal.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/privacidad" element={<Privacidad />} />
      <Route path="/terminos" element={<Terminos />} />
    </Routes>
  </BrowserRouter>
)
