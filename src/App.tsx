import React, { useState } from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm';

function App() {
	const [todos, setTodos] = useState<Array<Todo>>([]);

	const addTodo: AddTodo = (newTodo) => {
		if (newTodo !== '') {
			setTodos([...todos, { text: newTodo, complete: false }]);
		}
	};

	const toggleComplete: ToggleComplete = (selectedTodo) => {
		const updatedTodos = todos.map((todo) => {
			if (todo === selectedTodo) {
				return { ...todo, complete: !todo.complete };
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	return (
		<div className='App'>
			<h1>Todo app</h1>
			<TodoForm addTodo={addTodo} />
		</div>
	);
}

export default App;
