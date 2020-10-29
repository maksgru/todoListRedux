import React from "react";
import Todo from "../todo/todo";
import { connect } from "react-redux";
import "./todoList.css";
import { delTodo } from "../../actions/actionCreator";

function TodoList(props) {
  // const { todos, removeTodo, toggleComplite } = props;
  const { todos, delTodo } = props;
  return (
    <ul className="list-group">
      {todos.map((item) => {
        return (
          <Todo
            key={item.id}
            todo={item}
            onRemove={delTodo}
            // onComplite={toggleComplite}
          />
        );
      })}
    </ul>
  );
}

function mapStateToProps(store) {
  return { todos: store };
}

function mapDispatchToProps(dispatch) {
  return {
    delTodo: (id) => dispatch(delTodo(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

// export default TodoList;
