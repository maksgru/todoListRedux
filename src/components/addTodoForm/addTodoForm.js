import React, { Component } from "react";
import "./addTodoForm.css";

export default class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { todoText: "" };
    this.onTodoTextChange = this.onTodoTextChange.bind(this);
    this.onTodoSubmit = this.onTodoSubmit.bind(this);
  }
  onTodoTextChange(e) {
    this.setState({ todoText: e.target.value });
  }
  onTodoSubmit(e) {
    e.preventDefault();
    this.props.onTodoSubmitted(this.state.todoText);
    this.setState({ todoText: "" });
  }
  render() {
      const isInputEmpty = !this.state.todoText.trim();
    return (
      <form className='input-group' onSubmit={this.onTodoSubmit}>
        <input
        className='form-control'
          type="text"
          placeholder="What needs to be done?"
          onChange={this.onTodoTextChange}
          value={this.state.todoText}
        />
        <input
          className="btn btn-outline-secondary btn-sm"
          type="submit"
          value="Add Todo"
          disabled={isInputEmpty}
        />
      </form>
    );
  }
}
