import React from 'react';
import styles from './TodoList.module.scss'; 

interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

interface TodoListProps {
    todos: Todo[];
    onToggleTodo: (id: number) => void;
    onSelectTodo: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggleTodo, onSelectTodo }) => {
    return (
        <div className={styles.container}>
            <ul className={styles.todoList}> 
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`} // Правильное использование классов
                    >
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => {
                                onToggleTodo(todo.id); 
                            }}
                        />
                        <span onClick={() => onSelectTodo(todo.id)}>
                            {todo.task}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

