import React from "react";

const TodoRow = ({ todo, index, setTodoes }) => {
	const textStyle = { textDecoration: todo.isDone ? "line-through" : "none" };

	const handleDoneBtn = () => {
		setTodoes((prevTodoes) => {
			let newTodos = (prevTodoes[index].isDone = true);
			console.log(prevTodoes);
			return newTodos;
		});
	};

	return (
		<div>
			<span style={textStyle}>{todo.value}</span>
			{todo.isDone ? (
				<button style={{ background: "orangered", color: "white" }}>
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
