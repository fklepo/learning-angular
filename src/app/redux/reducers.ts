import {TodoState} from './state';
import {AnyAction, Reducer} from 'redux';
import {List} from 'immutable';
import {Actions} from './consts';

const initialState: TodoState = {
  user: 'Filip',
  todos: List.of()
};

export const todoReducer: Reducer<TodoState> =
  (state: TodoState = initialState, action: AnyAction): TodoState => {
    switch (action.type) {
      case Actions.LIST_TODOS:
        return Object.assign({}, state, {todos: action.extraProps});
      case Actions.ADD_TODO:
        return Object.assign({}, state, {todos: state.todos.push(action.extraProps)});
    }
    return state;
  };

export const userReducer: Reducer<TodoState> =
  (state: TodoState = initialState, action: AnyAction): TodoState => {
    switch (action.type) {
      case Actions.LOAD_USER:
        return Object.assign({}, state, {user: action.extraProps});
    }
    return state;
  };

export const polymorphicReducer: Reducer<TodoState> =
  (state: TodoState = initialState, action: AnyAction): TodoState => {
    switch (action.type) {
      case Actions.LOAD_USER:
        return userReducer(state, action);
      default:
        return todoReducer(state, action);
    }
  };
