import { useState } from "react"
import logo from '../logo.svg'

export default function DarkMode () {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={`page ${darkMode && 'dark-mode'}`}>
      <section display='flex' justify-content="top">
        {/* <p>
          TODO: Make the buttons align to top right
        </p> */}
        <img
          src={logo}
          width="800"
          alt="Spinning React logo"
          className="App-logo"
        />
      </section>
      <button className='dark-mode-button' onClick={() => {setDarkMode(true)}}>Dark Mode</button>
      <button className='light-mode-button' onClick={() => setDarkMode(false)}>Light Mode</button>  
    </div>

  )
}
