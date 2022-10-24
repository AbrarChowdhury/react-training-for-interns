import React from 'react'

const TodoRow = ({ todo }) => {
  const textStyle={textDecoration: todo.isDone?"line-through":"none"}
  return (
    <div>
        <span style={textStyle}>{todo.value}</span>
        {
          (todo.isDone)? <button style={{background:"orangered",color:"white"}}>delete</button> : <button style={{background:"green",color:"white"}}>done</button>
        }
    </div>
  )
}

export default TodoRow