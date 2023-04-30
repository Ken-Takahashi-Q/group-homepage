import { useState } from 'react'
import './App.scss'
import Navbar from '../components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar/>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </main>
  )
}

export default App
