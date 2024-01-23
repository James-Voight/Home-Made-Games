import { useState } from 'react'
import './header.css'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Home-Made Games</h1>
        <br />
        <nav>
            <button>Home</button>
            <button>About Us</button>
            <button>Games</button>
        </nav>
    </header>
    </>
  )
}

export default Header
