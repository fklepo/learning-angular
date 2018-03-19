import {List} from 'immutable';
import {Todo} from '../todo-interface';

export interface TodoState {
  user: string;
  todos: List<Todo>;
}
