import { useState } from "react";
import TextField from "@mui/material/TextField";

const InputComponent = () => {
	const [todo, setTodo] = useState("");

	const submitHandler = (event) => {
		event.preventDefault();
		console.log("Form is submitted!");
	};

	const onChangeHandler = (event) => {
		setTodo(event.target.value);
	};

	console.log(todo);

	return (
		<form onSubmit={submitHandler}>
			<TextField
				id="outlined-basic"
				label="Add a Task"
				variant="outlined"
				value={todo}
				onChange={onChangeHandler}
			/>
		</form>
	);
};

export default InputComponent;
