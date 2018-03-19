import {Component, Inject, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {TodoState} from '../redux/state';
import {Store} from 'redux';
import {TodoStore} from '../redux/store';
import 'rxjs/add/operator/switchMap';
import {Todo} from '../todo-interface';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-todo',
  template: '<b>Id: {{todo.id}}<br>Value: {{ todo.value }}</b>',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  todo$: Observable<Todo>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(TodoStore) private todoStore: Store<TodoState>
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todo = this.todoStore.getState().todos.find(todo => todo.id === id);
    console.log(this.todoStore.getState());
  }
}
