import { useState } from 'react'

import './App.css'
import { Child } from './components/Child'
import { use } from 'react'
import { Sum } from './components/Sum'

function App() {
  const user = {
    name: "Ali",
    age: "33",
    education: "batchelor"
  }

  const [uname, setUname] = useState("Haseeb");

  return (
    <>
      {/* <Child name=" Ronaldo" />
      <Child name=" Messi" age="12" /> */}
      <Child data={user} u={uname} />
      <Sum a={5} b={10} />

    </>
  )

}

export default App
