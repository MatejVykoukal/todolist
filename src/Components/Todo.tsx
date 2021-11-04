import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, changeChecked } from '../redux/todoActions';

interface Props {
	name: string;
	id: number;
	completed: boolean;
	todo: TodoModel;
}

export interface TodoModel {
	name: string;
	id: number;
	completed: boolean;
}

const Todo: React.FC<Props> = ({ id, completed, name }) => {
	const todos = useSelector(
		(state: { todos: { todos: TodoModel[] } }) => state.todos.todos
	);
	const todo = useSelector((state) => todos.find((el) => el.id === id)!);

	const dispatch = useDispatch();

	const handleChange = () => {
		const updatedTodo: TodoModel = { ...todo };
		updatedTodo.completed = !updatedTodo.completed;
		dispatch(changeChecked(updatedTodo));
	};

	const removeTodo = () => {
		const newTodos = todos.filter((el) => id !== el.id);
		dispatch(deleteTodo(newTodos));
	};

	return (
		<div className="todo">
			<li className={completed ? 'todo-item completed' : 'todo-item'}>
				{name}
			</li>
			<button className="complete-btn" onClick={handleChange}>
				<i className="fas fa-check"></i>
			</button>
			<button className="trash-btn" onClick={removeTodo}>
				<i className="fas fa-trash"></i>
			</button>
		</div>
	);
};

export default Todo;
