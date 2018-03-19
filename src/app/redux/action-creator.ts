import {Store} from 'redux';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {TodoState} from './state';
import {TodoStore} from './store';
import {Actions} from './consts';
import {List} from 'immutable';
import {Todo} from '../todo-interface';

@Injectable()
export class TodoAppActionCreator {

  private static API_URL = '/fake-backend/';

  constructor(private httpClient: HttpClient, @Inject(TodoStore) private todoStore: Store<TodoState>) { }

  listTodos() {
      const parent = this;
      this.httpClient.get(TodoAppActionCreator.API_URL + 'todo')
                     .map(res => res as Todo[])
                     .subscribe(todos => parent.todoStore.dispatch({
                       type: Actions.LIST_TODOS,
                       extraProps: List.of(...todos)}));
  }

  addTodo(todo: string) {
    const parent = this;
    console.log('adding new todo ', todo);
    this.httpClient.post(TodoAppActionCreator.API_URL + 'todo', {value: todo})
      .subscribe(res => {
                  parent.todoStore.dispatch({
                   type: Actions.ADD_TODO,
                   extraProps: res});
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
