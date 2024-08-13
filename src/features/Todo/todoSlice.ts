import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
    id: number;
    task: string;
    completed: boolean;
}

export type TodoState = {
    todos: Todo[];
    todoTask: string;
    selectedTodoId: number | null;
    filter: 'all' | 'active' | 'completed'; 
}

const initialState: TodoState = {
    todos: [],
    todoTask: '',
    selectedTodoId: null,
    filter: 'all',
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,

    reducers: {
        setAddTodo: (state, action: PayloadAction<string>) => {
            const newTodo: Todo = { id: Date.now(), task: action.payload, completed: false };
            state.todos.push(newTodo);
            state.todoTask = '';
        },
        setToggleTodo: (state,action: PayloadAction<number>) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) { 
                todo.completed = !todo.completed;
            }
        },
        setDeleteTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
            state.selectedTodoId = null;
        },
        setTodoTask: (state, action: PayloadAction<string>) => {
            state.todoTask = action.payload;
        },
        setSelectedTodo: (state, action: PayloadAction<number | null>) => {
            state.selectedTodoId = action.payload;
        },
        setFilter: (state, action: PayloadAction<'all' | 'active' | 'completed'>) => {
            state.filter = action.payload; 
        }
    },
});

export const {  setAddTodo, setToggleTodo, setDeleteTodo, setTodoTask, setSelectedTodo,setFilter  } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
