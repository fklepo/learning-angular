import {Component, Inject, OnInit} from '@angular/core';
import {TodoAppActionCreator} from '../redux/action-creator';
import {TodoStore} from '../redux/store';
import {Store} from 'redux';
import {TodoState} from '../redux/state';
import {List} from 'immutable';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: List<string> | null = null;

  constructor(@Inject(TodoStore) private todoStore: Store<TodoState>, private todoAppActionCreator: TodoAppActionCreator) { }

  ngOnInit(): void {
    this.getTodos();
    this.todoAppActionCreator.listTodos();
  }

  getTodos(): void {
    this.todoStore.subscribe(() => {
      this.todos = this.todoStore.getState().todos;
    });
  }
}
