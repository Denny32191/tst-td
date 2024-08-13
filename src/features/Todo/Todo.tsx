import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddTodo,
  setToggleTodo,
  setDeleteTodo,
  setTodoTask,
  setFilter,
  setSelectedTodo,
} from "./todoSlice";
import { RootState } from "../../app/store";
import {
   selectActiveTodosCount,
  selectFilteredTodos,
} from "./todoSelectors"; 
import { TodoList } from "../../components/TodoList";
import { ButtonForm } from "../../components/ButtonForm/ButtonForm";

export const Todo = () => {
    const activeTodosCount = useSelector(selectActiveTodosCount);
  const { todoTask,filter } = useSelector(
    (state: RootState) => state.todo
  );
  const displayedTodos = useSelector(selectFilteredTodos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoTask.trim()) {
      dispatch(setAddTodo(todoTask));
    }
  };

  const handleDeleteCompletedTodos = () => {
    const completedTodoIds = displayedTodos
      .filter(todo => todo.completed)
      .map(todo => todo.id);

    completedTodoIds.forEach(id => {
      dispatch(setDeleteTodo(id)); 
    });
  };

  const handleToggleTodo = (id: number) => {
    dispatch(setToggleTodo(id)); 
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTodoTask(event.target.value));
  };
  const handleFilterChange = (filter: "all" | "active" | "completed") => {
    dispatch(setFilter(filter));
  };

  const handleSelectTodo = (id: number) => {
    dispatch(setSelectedTodo(id)); 
  };

  const itemsLeftCount = filter === "all" ? activeTodosCount : displayedTodos.length;
  return (
    <div>
      <div>
        <h1>ToDo App</h1>
        <input
          type="text"
          value={todoTask}
          onChange={handleInputChange}
          placeholder="Введите задачу"
        />
        <ButtonForm onClick={handleAddTodo}>Добавить</ButtonForm>
      </div>
      <TodoList
        todos={displayedTodos}
        onToggleTodo={handleToggleTodo}
        onSelectTodo={handleSelectTodo} 
      />
      
      <div>
      <span>{itemsLeftCount} items left </span>
        <ButtonForm onClick={() => handleFilterChange("all")}>All</ButtonForm>
        <ButtonForm onClick={() => handleFilterChange("active")}>
          Active
        </ButtonForm>
        <ButtonForm onClick={() => handleFilterChange("completed")}>
          Completed
        </ButtonForm>

        <ButtonForm onClick={handleDeleteCompletedTodos}>Clear completed</ButtonForm>
      </div>
    </div>
  );
};
