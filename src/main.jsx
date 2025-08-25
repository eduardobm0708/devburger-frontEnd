import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Login } from './containers/Login'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
