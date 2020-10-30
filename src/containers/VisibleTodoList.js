import { connect } from "react-redux";
import { toggleTodo } from "../actions/actionCreator";
import TodoList from "../components/todoList/todoList";
import { getVisibleTodos } from '../selectors'

const mapStateToProps = state => ({
  todos: getVisibleTodos(state)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
