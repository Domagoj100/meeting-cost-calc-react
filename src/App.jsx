import { useState } from 'react'
import Button from './components/Button.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>root element</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Button />
    </>
  )
}

export default App