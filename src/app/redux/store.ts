import {TodoState} from './state';
import {Store, createStore} from 'redux';
import {polymorphicReducer, todoReducer} from './reducers';
import {InjectionToken} from '@angular/core';

export function createTodoStore(): Store<TodoState> {
  return createStore<TodoState>(polymorphicReducer);
}

export const TodoStore = new InjectionToken('Todo.store');

export const todoStoreProviders = [
  {provide: TodoStore, useFactory: createTodoStore }
];
