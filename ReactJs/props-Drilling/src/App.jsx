import Parent from "./components/Parent";


function App() {
  const message = "Hello from App";

  return (
    <>
      <Parent msg={message} />
    </>
  )
}

export default App;