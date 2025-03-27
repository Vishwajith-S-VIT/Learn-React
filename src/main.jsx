import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppBackup from './AppBackup'
import { App } from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
