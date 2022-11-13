import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const TodoContainer = () => {
	const addList = [];
	const [todoName, setTodoName] = useState("");
	const [todoList, settodoList] = useState(addList);

	const inputChange = (event) => {
		setTodoName(event.target.value);
	};

	const ClickHandler = () => {
		const newtodoList = todoList.concat([todoName]);
		settodoList(newtodoList);
		console.log(todoList);
	};

	return (
		<React.Fragment>
			<div>
				<TextField
					id="outlined-basic"
					label="To Do List"
					variant="outlined"
					value={todoName}
					onChange={inputChange}
					style={{ width: "500px" }}
				/>

				<Button
					variant="contained"
					size="Large"
					style={{ marginLeft: 20, marginTop: 10 }}
					onClick={ClickHandler}
				>
					Add to List
				</Button>
			</div>
		</React.Fragment>
	);
};

export default TodoContainer;
