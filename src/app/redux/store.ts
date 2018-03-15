import {TodoState} from './state';
import {Store, createStore} from 'redux';
import {todoReducer} from './reducers';
import {InjectionToken} from '@angular/core';

export function createTodoStore(): Store<TodoState> {
  return createStore<TodoState>(todoReducer);
}

export const TodoStore = new InjectionToken('Todo.store');

export const todoStoreProviders = [
  {provide: TodoStore, useFactort: createTodoStore }
];

