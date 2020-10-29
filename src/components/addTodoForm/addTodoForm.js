import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from '../../actions/actionCreator';
import "./addTodoForm.css";

class AddTodoForm extends Component {
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
    // this.props.onTodoSubmitted(this.state.todoText);
    const payload = this.state.todoText;
    this.props.addTodo(payload)

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

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (payload) => dispatch(addTodo(payload))
  };
};

export default connect(null ,mapDispatchToProps)(AddTodoForm);
