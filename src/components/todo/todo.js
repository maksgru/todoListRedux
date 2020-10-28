import React, { Component } from "react";
import "./todo.css";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { complited: false };
  }
  render() {
    const { todo, onRemove, onComplite } = this.props;
    const styles = todo.complited
      ? "list-group-item complited"
      : "list-group-item";
      const btnStyle = todo.complited ? 'btn-success' : 'btn-outline-info';
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
}
