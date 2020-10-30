import React, { Component } from "react";
import Header from "../header/header";
import VisibleTodoList from "../../containers/VisibleTodoList";
import AddTodoForm from "../addTodoForm/addTodoForm";
import "./App.css";

export default class App extends Component {

  render() {
    return (
      <div className="todo-app">
        <Header />
        <AddTodoForm />
        <VisibleTodoList />
      </div>
    );
  }
}
