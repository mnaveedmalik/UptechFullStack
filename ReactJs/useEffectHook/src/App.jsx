import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Welcome } from './components/Welcome'
import { Counter } from './components/Counter'
import { Users } from './components/Users'

function App() {
  return (
    <>
      <Welcome />
      <Counter />
      <Users />


    </>
  )
}

export default App