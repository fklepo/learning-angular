import {Component, Inject, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';
import {TodoState} from '../redux/state';
import {Store} from 'redux';
import {TodoAppActionCreator} from '../redux/action-creator';
import {TodoStore} from '../redux/store';

@Component({
  selector: 'app-todo-current-user',
  template: '<span>Currently logged in user: {{ currentUser }}</span>'
})
export class TodoCurrentUserComponent implements OnInit {

  currentUser: string | null = null;

  // constructor(private todoService: TodoService) { }

  constructor(@Inject(TodoStore) private todoStore: Store<TodoState>, private todoAppActionCreator: TodoAppActionCreator) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.todoStore.subscribe(() => this.currentUser = this.todoStore.getState().user);
    this.todoAppActionCreator.loadUser();
  }
}
