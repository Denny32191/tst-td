
import { RootState } from '../../app/store'; 
import { TodoState } from './todoSlice';


export const selectTodos = (state: RootState) => state.todo.todos;

export const selectActiveTodosCount = (state: RootState) =>
    state.todo.todos.filter(todo => !todo.completed).length;
   
export const selectCompletedTodosCount = (state: RootState) =>
    state.todo.todos.filter(todo => todo.completed).length;


export const selectFilteredTodos = (state: { todo: TodoState }) => {
    switch (state.todo.filter) {
        case 'active':
            return state.todo.todos.filter(todo => !todo.completed);
        case 'completed':
            return state.todo.todos.filter(todo => todo.completed);
        case 'all':
        default:
            return state.todo.todos;
    }
};