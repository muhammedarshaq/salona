import { useState } from 'react'
import Welcome from './components/views/Welcome/Welcome'
import Signin from './components/auth/Signin'
import Navbar from './components/layout/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Welcome /> */}
      {/* <Navbar /> */}
      <Signin />
    </>
  )
}

export default App
