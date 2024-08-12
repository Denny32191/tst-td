import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { todoReducer } from "../features/Todo/todoSlice";
import { RootState } from "../app/store";





describe('Todo', () => {
    const initialState: RootState = {
        todo:({
            todos: [],
            todoTask: '',
            selectedTodoId: null,
            filter: 'all',
        }),
    };

    it('should create the todo slice', () => {
        const store = configureStore({
            reducer: {
                todo: todoReducer,
            },
        });

        expect(store.getState().todo).toEqual(initialState.todo);
    });
})
