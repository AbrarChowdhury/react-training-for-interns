import { useState } from 'react';
import './App.css';
import TodoRow from './components/TodoRow';

function App() {
  const [todoes, setTodoes] = useState(
    [
      {
        value:"attend make up class at 8AM",
        isDone: false
      },
      {
        value:"attend make up class at 6PM",
        isDone: false
      },
      {
        value:"Prepare for electronics 1 quiz",
        isDone: false
      },
      {
        value:"Complete S.T's second project",
        isDone: true
      },
    ]
  )

  let todoInputValue=""

  const handleChange = (event)=>{
    todoInputValue = event.target.value
    console.log(todoInputValue)
  }

  const addTodo = ()=>{
    setTodoes( prevTodoes => [ ...prevTodoes, { value:todoInputValue, isDone:false } ])
    console.log(todoes)
  }

  return (
    <div className="App">
      <h1>BIOFORGE</h1>
      <h2>Todo App</h2>

      { todoes.map( (todo,i)=>
        <TodoRow todo={todo} index={i} setTodoes={setTodoes}/>
      )}

      <input name="todo-input" type="text" placeholder='todo' onChange={(event)=>handleChange(event)}/>
      <button onClick={addTodo}>Add todo</button>

    </div>
  )
}

export default App;
