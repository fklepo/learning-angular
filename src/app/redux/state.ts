import {List} from 'immutable';

export interface TodoState {
  user: string;
  todos: List<string>;
}
