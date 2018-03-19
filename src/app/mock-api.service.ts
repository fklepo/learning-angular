import { Injectable } from '@angular/core';
import {TODOS} from './mock-data';
import {Todo} from './todo-interface';

@Injectable()
export class MockApiService {

  constructor() { console.log('mockapi service created!'); }

  private user = 'filip';

  private todos = TODOS;

  getUser(): string {
    return this.user;
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo): Todo {
    const newTodo: Todo = {id: this.todos.length + 1, value: todo.value};
    this.todos.push(newTodo);
    return newTodo;
  }
}
