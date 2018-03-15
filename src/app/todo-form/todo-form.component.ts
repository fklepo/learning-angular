import {Component, Inject} from '@angular/core';
import {TodoService} from '../todo.service';
import {TodoState} from '../redux/state';
import {Store} from 'redux';
import {TodoAppActionCreator} from '../redux/action-creator';
import {TodoStore} from '../redux/store';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  private DEFAULT_TODO_TEXT = '';

  todoText: string = this.DEFAULT_TODO_TEXT;

  // constructor(private todoService: TodoService) {}

  constructor(@Inject(TodoStore) private todoStore: Store<TodoState>, private todoAppActionCreator: TodoAppActionCreator) { }

  onSubmit() {
    // this.todoService.addTodo(this.todoText);
    this.todoAppActionCreator.addTodo(this.todoText);
    this.todoText = this.DEFAULT_TODO_TEXT;
  }
}
