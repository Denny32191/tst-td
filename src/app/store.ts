
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { TodoState, todoReducer } from '../features/Todo/todoSlice';

export const store = configureStore({
  reducer: {
   todo: todoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = {
todo: TodoState;
};
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;