import { Injectable } from '@angular/core';
import {TODOS} from './mock-data';

@Injectable()
export class MockApiService {

  constructor() { }

  private user = 'filip';

  private todos = TODOS;

  getUser(): string {
    return this.user;
  }

  getTodos(): string[] {
    return this.todos;
  }

  addTodo(todo: string) {
    this.todos.push(todo);
  }
}
