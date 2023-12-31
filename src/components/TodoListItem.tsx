import React from 'react';

interface TodoListItemProps {
	todo: Todo;
	toggleComplete: ToggleComplete;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
	todo,
	toggleComplete,
}) => {
	return (
		<li>
			<label
				className={todo.complete ? 'todo-row complete' : 'todo-row'}
			></label>
			<input
				type='checkbox'
				onChange={() => toggleComplete(todo)}
				checked={todo.complete}
			/>
			{todo.text}
		</li>
	);
};
