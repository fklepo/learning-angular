import {HttpEvent, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {MockApiService} from './mock-api.service';
import {Todo} from './todo-interface';

export function mockBackend(request: HttpRequest<any>,
                            service: MockApiService): Observable<HttpEvent<any>> {
  if (request.url.endsWith('todo')) {
    if (request.method === 'GET') {
      return new Observable(resp => {
        resp.next(new HttpResponse({
          status: 200,
          body: service.getTodos()
        }));
        resp.complete();
      });
    } else if (request.method === 'POST') {
      const todo = service.addTodo(request.body as Todo);
      return new Observable(resp => {
        resp.next(new HttpResponse({
          status: 200,
          body: todo
        }));
        resp.complete();
      });
    }
  }
  if (request.url.endsWith('user') && request.method === 'GET') {
    return new Observable(resp => {
      resp.next(new HttpResponse({
        status: 200,
        body: service.getUser()
      }));
      resp.complete();
    });
  }
}
