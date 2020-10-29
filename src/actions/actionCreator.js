export const addTodo = (todoText) => ({
  type: "ADD_TODO",
  todoText,
});

export const delTodo = (id) => ({
  type: "DEL_TODO",
  id,
});
