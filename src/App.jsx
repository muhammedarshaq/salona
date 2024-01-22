import { useState } from 'react'
import Welcome from './components/views/Welcome/Welcome'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcome />
    </>
  )
}

export default App
