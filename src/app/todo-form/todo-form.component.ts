import {Component, Inject} from '@angular/core';
import {TodoService} from '../todo.service';
import {TodoState} from '../redux/state';
import {Store} from 'redux';
import {TodoAppActionCreator} from '../redux/action-creator';
import {TodoStore} from '../redux/store';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  private DEFAULT_TODO_TEXT = '';

  todoText: string = this.DEFAULT_TODO_TEXT;

  constructor(@Inject(TodoStore) private todoStore: Store<TodoState>,
              private todoAppActionCreator: TodoAppActionCreator,
              private router: Router) { }

  onSubmit() {
    this.todoAppActionCreator.addTodo(this.todoText);
    this.todoText = this.DEFAULT_TODO_TEXT;
    this.router.navigate(['/todo/list']);
  }
}
