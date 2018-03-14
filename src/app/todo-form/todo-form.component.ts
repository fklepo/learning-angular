import { Component } from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  private DEFAULT_TODO_TEXT = '';

  todoText: string = this.DEFAULT_TODO_TEXT;

  constructor(private todoService: TodoService) {}

  onSubmit() {
    this.todoService.addTodo(this.todoText);
    this.todoText = this.DEFAULT_TODO_TEXT;
  }
}
