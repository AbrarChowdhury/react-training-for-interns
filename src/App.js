import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const[ page, setPage] = useState("page1")
  const[ life, setLife] = useState("good")

  useEffect(()=>{
    console.log("some state change occured")
  })

  useEffect(()=>{
    console.log("this component just mounted")
  },[])

  useEffect(()=>{
    console.log("the page state changed")
  },[page])



  return (
    <div className="App">
      <button onClick={()=>setPage("page1")}>page1</button>
      <button onClick={()=>setPage("page2")}>page2</button>
      <button onClick={()=>setPage("page3")}>page3</button>

      <h1>{page}</h1>
      <h1>life is {life}</h1>
      <button onClick={()=>setLife("good")}>make life better</button>
      <button onClick={()=>setLife("bad")}>dont do anything about it</button>
    </div>
  )
}

export default App;
