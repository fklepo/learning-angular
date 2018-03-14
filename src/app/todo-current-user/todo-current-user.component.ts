import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-current-user',
  template: '<span>Currently logged in user: {{ currentUser }}</span>'
})
export class TodoCurrentUserComponent implements OnInit {

  currentUser: string | null = null;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.todoService.getUser()
      .subscribe(currentUser => this.currentUser = currentUser);
  }
}
