import React from "react";
import Todo from "../todo/todo";
import { connect } from "react-redux";
import "./todoList.css";
import { delTodo, toggleTodo } from "../../actions/actionCreator";

function TodoList(props) {
  const { todos, delTodo, toggleComplite } = props;
  return (
    <ul className="list-group">
      {todos.map((item) => {
        return (
          <Todo
            key={item.id}
            todo={item}
            onRemove={delTodo}
            onComplite={toggleComplite}
          />
        );
      })}
    </ul>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    delTodo: (id) => dispatch(delTodo(id)),
    toggleComplite: id => dispatch(toggleTodo(id))
  };
}

export default connect(null, mapDispatchToProps)(TodoList);