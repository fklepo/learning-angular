import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-todo',
  template: '<b>{{ todo }}</b>',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input() todo: string;
}
