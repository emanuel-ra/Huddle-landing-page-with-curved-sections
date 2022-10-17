import { useState } from 'react'
import Header from  './Header'
import Body from './Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <Header />
        <Body />
      </main>
    </>
  )
}

export default App
