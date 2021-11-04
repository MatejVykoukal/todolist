import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddTodo } from '../redux/todoActions';

interface Props {
	status: string;
	setStatus: any;
}

const Form: React.FC<Props> = ({ status, setStatus }) => {
	const [text, setText] = useState('');

	const dispatch = useDispatch();

	const handleTodoName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	};

	const addTodo = (e: React.FormEvent) => {
		e.preventDefault();
		const todo = {
			name: text,
			completed: false,
			id: Math.random() * 1000,
		};
		dispatch(AddTodo(todo));
		setText('');
	};

	const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setStatus(e.target.value);
	};

	return (
		<form onSubmit={addTodo}>
			<div className="input__container">
				<input
					type="text"
					className="todo-input"
					value={text}
					placeholder="Add todo..."
					onChange={handleTodoName}
				/>
				<button className="todo-button" type="submit">
					<i className="fas fa-plus-square"></i>
				</button>
			</div>
			<div className="filter__container">
				<select
					name="todos"
					onChange={handleFilterChange}
					className="filter-todo"
				>
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div>
		</form>
	);
};

export default Form;
