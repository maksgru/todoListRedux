
const todoList = [
    {
    todoText: 'drink coffe',
    complited: false,
    id: 1,
  },
  {
    todoText: 'drink more coffe',
    complited: false,
    id: 2,
  }
];


export const todos = (state = todoList, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: state.length + 1,
          todoText: action.todoText,
          complited: false,
        },
      ];
      case 'DEL_TODO':
        return [...deliteTodo(state, action.id)];
    default:
      return state;
  }
};


const deliteTodo = (state, id) => {
  const index = state.findIndex((todo) => todo.id === id);
      const refreshedState = [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
      return refreshedState;
};