import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./styles/main.scss"
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './context/userContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <BrowserRouter>
      <React.StrictMode>
          <App />  
      </React.StrictMode>
    </BrowserRouter>
  </UserContextProvider>
)
