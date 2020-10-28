import React from "react";
import Todo from "../todo/todo";
import "./todoList.css";

 function TodoList(props) {
    const { todos, removeTodo, toggleComplite } = props;
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
export default TodoList;
