import { useState } from 'react'
import "./styles/main.scss"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <area51 />
    </div>
  )
}

export default App
