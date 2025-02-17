import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LayoutComponent from './components/LayoutComponent.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LayoutComponent>
      <App />     
    </LayoutComponent>

  </StrictMode>,
)
