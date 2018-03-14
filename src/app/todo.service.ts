import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

  private static API_URL = '/fake-backend/';

  constructor(private httpClient: HttpClient) { }

  getUser(): Observable<string> {
    return this.httpClient.get(TodoService.API_URL + 'user').map(response => response as string);
  }

  getTodos(): Observable<string[]> {
    return this.httpClient.get(TodoService.API_URL + 'todo').map(response => response as string[]);
  }

  addTodo(todo: string) {
    console.log('adding new todo: ' + todo);
    this.httpClient.post(TodoService.API_URL + 'todo', todo).subscribe(value => {console.log(value + ' '); }, error2 => {console.log(error2); });
  }
}
