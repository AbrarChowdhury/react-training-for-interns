import React from 'react'

const TodoRow = ({ todo }) => {
  return (
    <div>
        <span>{todo.value}</span>
        {
          (todo.isDone)? <button>delete</button> : <button disabled={todo.isDone}>done</button>
        }
    </div>
  )
}

export default TodoRow