import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    ;(async () => {
      const res = await fetch('/api')
      const data = await res.json()
      setMessage(data.message)
    })()
  }, [])

  return <div>{message}</div>
}

export default App
