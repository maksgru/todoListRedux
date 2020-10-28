import React from "react";
import "./todo.css";

function Todo(props) {
    const { todo, onRemove, onComplite } = props;
    const styles = todo.complited
      ? "list-group-item complited"
      : "list-group-item";
      const btnStyle = todo.complited ? 'btn-success' : 'btn-outline-success';
    return (
      <li className={styles}>
        {todo.todoText}

        <button
          className="btn btn-outline-danger btn-sm float-right todo-btn"
          onClick={() => onRemove(todo.id)}
        >
          <i className="fa fa-trash-o" />
        </button>

        <button
          className={`btn ${btnStyle} btn-sm float-right todo-btn`}
          onClick={() => onComplite(todo.id)}
        >
          <i className="fa fa-check" />
        </button>
      </li>
    );
  }
export default Todo;
