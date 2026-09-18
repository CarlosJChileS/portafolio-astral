import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import './three.css'
import './layout-order.css'

createRoot(document.getElementById('root')).render(
  <StrictMode><App /></StrictMode>,
)

