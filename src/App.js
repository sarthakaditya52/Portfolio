import React, { useEffect, useState } from 'react'
import Main from './components/Main'
import SplashScreen from './components/SplashScreen'

function App() {

  const [splash, setSplash] = useState(true)

  useEffect(() => {
    
    document.body.classList.add("bg-dark-black")        

    const timer = setTimeout(() => {
      document.body.classList.add("reduce-size")
    }, 3000)
    
    const timer2 = setTimeout(() => {
      document.body.classList.remove("bg-dark-black")
      setSplash(false)
    }, 4000)

    return () => {
      clearTimeout(timer)
      clearTimeout(timer2)
    }

  }, [])
  
  return (
    <div>
      {splash ? 
        <SplashScreen />
        :
        <Main />
      }
    </div>
  )
}

export default App
