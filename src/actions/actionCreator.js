let todoId = 0;

export const addTodo = todoText => ({
  type: "ADD_TODO",
  todoText,
  id: todoId++
});

export const delTodo = id => ({
  type: "DEL_TODO",
  id
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLITED: 'SHOW_COMPLITED',
  SHOW_ACTIVE: 'SHOW_ACTIVE' 
};