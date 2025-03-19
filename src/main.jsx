import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppBackup from './AppBackup'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppBackup />
  </StrictMode>,
)
