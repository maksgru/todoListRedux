const todoList = [
  {
    todoText: "drink coffe",
    complited: false,
    id: 100,
  },
  {
    todoText: "drink more coffe",
    complited: false,
    id: 200,
  },
];

const todos = (state = todoList, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          todoText: action.todoText,
          complited: false,
        },
      ];
    case "DEL_TODO":
      return [...deliteTodo(state, action.id)];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, complited: !todo.complited } : todo
      );
    default:
      return state;
  }
};

const deliteTodo = (state, id) => {
  const index = state.findIndex((todo) => todo.id === id);
  const refreshedState = [...state.slice(0, index), ...state.slice(index + 1)];
  return refreshedState;
};

export default todos;