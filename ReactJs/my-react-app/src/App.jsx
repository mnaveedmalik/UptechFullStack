import { useState } from 'react'
import './App.css'
import { Home } from './components/Home'
import { Addition } from './components/Addition'
import { Section1 } from './components/section1'
import { Sum } from './components/Sum'



function App() {
  return (
    <>
      <h1>All components are here </h1>
      <Home />
      <Addition />
      <Sum a={3} b={45} />
      <Section1 />



    </>

  )
}

// function App() {

//   //Js code 

//   const [name, setName] = useState("N");
//   const [Color, setColor] = useState("");

//   function setHandler() {
//     setName("Haseeb");
//     setColor("blue");
//   }

//   return (
//     <>
//       <h1>Hello world </h1>
//       <p>Haseeb finding error</p >
//       <h2 style={{ color: Color }}> Name:{name}</h2 >
//       {/* <button onClick={() => { setName("Ali") }}>Click</button> */}

//       < button onClick={setHandler} > Click</button >
//     </>

//   )

// }


export default App
