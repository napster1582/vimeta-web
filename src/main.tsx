import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/base.css'
import './styles/sections.css'
import './styles/cases.css'
import './styles/contact.css'
import './styles/modal.css'

createRoot(document.getElementById('root')!).render(<App />)
