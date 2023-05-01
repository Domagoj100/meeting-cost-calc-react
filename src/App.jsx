import { useState } from 'react'
import Box from './components/Box.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Box text = 'Box'/>
      <Box text = 'String' />
    </>
  )
}

export default App