import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Area from "./components/areaFiftyOne"
import "./styles/main.scss"
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <React.StrictMode>
      <App />  
  </React.StrictMode>
</BrowserRouter>
)
