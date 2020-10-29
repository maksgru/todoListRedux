import React, { Component } from "react";
import Header from "../header/header";
import TodoList from "../todoList/todoList";
import AddTodoForm from "../addTodoForm/addTodoForm";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      visibilityFilter: "all",
    };
    this.getId = 100;
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleComplite = this.toggleComplite.bind(this);
    this.todoFilter = this.todoFilter.bind(this);
  }

  createTodo(todoText) {
    return {
      todoText,
      complited: false,
      id: this.getId++,
    };
  }

  addTodo(todoText) {
    const newTodo = this.createTodo(todoText);
    this.setState(({ todoList }) => {
      const refreshedTodoList = [...todoList, newTodo];
      return { todoList: refreshedTodoList };
    });
  }

  removeTodo(id) {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex((todo) => todo.id === id);
      const refreshedTodoList = [
        ...todoList.slice(0, index),
        ...todoList.slice(index + 1),
      ];
      return { todoList: refreshedTodoList };
    });
  }

  toggleComplite(id) {
    const index = this.state.todoList.findIndex((todo) => todo.id === id);
    const isComplited = this.state.todoList[index].complited;
    let refreshedTodo = this.state.todoList[index];
    refreshedTodo.complited = !isComplited;
    this.setState(({ todoList }) => {
      const refreshedTodoList = [
        ...todoList.slice(0, index),
        refreshedTodo,
        ...todoList.slice(index + 1),
      ];
      return { todoList: refreshedTodoList };
    });
  }

  todoFilter(type) {
    this.setState({ visibilityFilter: type });
  }

  getVisibleTodos() {
    switch (this.state.visibilityFilter) {
      case "all":
        return this.state.todoList;
      case "active":
        return this.state.todoList.filter((todo) => !todo.complited);
      case "done":
        return this.state.todoList.filter((todo) => todo.complited);
      default:
        return this.state.todoList;
    }
  }

  render() {
    const doneTodos = this.state.todoList.filter((todo) => todo.complited)
      .length;
    const activeTodos = this.state.todoList.length - doneTodos;

    // const visibleTodos = this.getVisibleTodos();

    return (
      <div className="todo-app">
        <Header
          done={doneTodos}
          active={activeTodos}
          todoFilter={this.todoFilter}
          filter={this.state.visibilityFilter}
        />
        <AddTodoForm /*onTodoSubmitted={this.addTodo}*/ />
        <TodoList
          /*todos={visibleTodos}
          removeTodo={this.removeTodo}
          toggleComplite={this.toggleComplite} */
        />
      </div>
    );
  }
}
