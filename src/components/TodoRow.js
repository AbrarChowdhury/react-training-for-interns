import React from 'react'

const TodoRow = ({ todo }) => {
  return (
    <div>
        <span>{todo.value}</span>
        <button disabled={todo.isDone} >done</button>
        <button>delete</button>
    </div>
  )
}

export default TodoRow