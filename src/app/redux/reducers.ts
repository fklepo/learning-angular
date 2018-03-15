import {TodoState} from './state';
import {TODOS} from '../mock-data';
import {AnyAction, Reducer} from 'redux';
import {List} from 'immutable';
import {Actions} from './consts';

const initialState: TodoState = {
  user: 'Filip',
  todos: List.of(...TODOS)
};

export const todoReducer: Reducer<TodoState> =
  (state: TodoState = initialState, action: AnyAction): TodoState => {
    switch (action.type) {
      case Actions.LIST_TODOS:
        return Object.assign({}, state, {todos: action.extraProps});
      case Actions.ADD_TODO:
        return Object.assign({}, state, {todos: state.todos.push(action.extraProps)});
    }
  };


