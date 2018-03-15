import {Action, ActionCreator, Store} from 'redux';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {TodoState} from './state';
import {TodoStore} from './store';
import {Actions} from './consts';
import {List} from 'immutable';

@Injectable()
export class TodoAppActionCreator {

  private static API_URL = '/fake-backend/';

  constructor(private httpClient: HttpClient, @Inject(TodoStore) private todoStore: Store<TodoState>) { }

  listTodos() {
      const parent = this;
      this.httpClient.get(TodoAppActionCreator.API_URL + 'todo')
                     .map(res => res as string[])
                     .subscribe(todos => parent.todoStore.dispatch({
                       type: Actions.LIST_TODOS,
                       extraProps: List.of(...todos)}));
  }

  addTodo(todo: string) {
    const parent = this;
    this.httpClient.post(TodoAppActionCreator.API_URL + 'todo', todo)
      .subscribe(res => {
                  parent.todoStore.dispatch({
                   type: Actions.ADD_TODO,
                   extraProps: todo});
                 },
                (err: HttpErrorResponse) => {
                  console.log(err);
                });
  }

  loadUser() {
    const parent = this;
    this.httpClient.get(TodoAppActionCreator.API_URL + 'user')
      .subscribe(user => parent.todoStore.dispatch({
            type: Actions.LOAD_USER,
            extraProps: user}));
  }
}

