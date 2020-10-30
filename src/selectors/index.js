import { createSelector } from 'reselect';
import { VisibilityFilters } from '../actions/actionCreator'

const getVisibilityFilter = state => state.visibilityFilter;
const getTodos = state => state.todos;

export const getVisibleTodos = createSelector(
    [getVisibilityFilter, getTodos],
    (filter ,todos) => {
        switch (filter) {
          case VisibilityFilters.SHOW_ALL:
            return todos;
          case VisibilityFilters.SHOW_COMPLITED:
            return todos.filter((todo) => todo.complited);
          case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter((todo) => !todo.complited);
          default:
            throw new Error("Unknown filter: " + filter);
        }
      }
);