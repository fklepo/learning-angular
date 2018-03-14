import {HttpEvent, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {MockApiService} from './mock-api.service';

export function mockBackend(request: HttpRequest<any>,
                            service: MockApiService): Observable<HttpEvent<any>> {
  console.log('mockBackend: ' + request.url + ' ' + request.method);
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
      service.addTodo(request.body as string);
      return new Observable(resp => {
        resp.next(new HttpResponse({
          status: 200
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
