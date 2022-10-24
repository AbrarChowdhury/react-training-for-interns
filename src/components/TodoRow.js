import React from "react";

const TodoRow = ({ todo, index, setTodoes }) => {
	const textStyle = { textDecoration: todo.isDone ? "line-through" : "none" };

	const handleDoneBtn = () => {
		setTodoes( prevTodoes => prevTodoes.map(( todo, i )=> i === index ? { ...todo, isDone:true} : todo) )
	}
	const handleDelete = () => {
		setTodoes( prevTodoes => prevTodoes.filter(( todo, i )=> i !== index) )
	}

	return (
		<div>
			<span style={textStyle}>{todo.value}</span>
			{todo.isDone ? (
				<button style={{ background: "orangered", color: "white" }} onClick={handleDelete}>
					delete
				</button>
			) : (
				<button
					style={{ background: "green", color: "white" }}
					onClick={handleDoneBtn}
				>
					done
				</button>
			)}
		</div>
	);
};

export default TodoRow;
