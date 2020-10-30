import { connect } from 'react-redux';
import TodosInfo from '../components/header/todosInfo/todosInfo';

const getTodosInfo = todos => {
    const active = todos.filter(todo => !todo.complited).length;
    const done = todos.length - active;
    return { active, done }
}

const mapStateToProps = state => ({
    info: getTodosInfo(state.todos)
});

export default connect(mapStateToProps)(TodosInfo)