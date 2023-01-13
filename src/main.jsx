import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Area from "./components/areaFiftyOne"
import "./styles/main.scss"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Area />
  </React.StrictMode>
)
