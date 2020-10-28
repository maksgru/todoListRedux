import React, { Component } from "react";
import Todo from "../todo/todo";
import "./todoList.css";

export default class TodoList extends Component {
  render() {
    const { todos, removeTodo, toggleComplite } = this.props;
    return (
      <ul className="list-group">
        {todos.map((item) => {
          return (
            <Todo
              key={item.id}
              todo={item}
              onRemove={removeTodo}
              onComplite={toggleComplite}
            />
          );
        })}
      </ul>
    );
  }
}
