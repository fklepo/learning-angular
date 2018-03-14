import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {mockBackend} from './mock-backend';
import {MockApiService} from './mock-api.service';
import {Injectable} from '@angular/core';

@Injectable()
export class MockHttpInterceptor implements HttpInterceptor {

  constructor(private mockApiService: MockApiService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = req.url;
    const method = req.method;

    console.log(url + ' ' + method);

    return mockBackend(req, this.mockApiService) || next.handle(req);
  }
}
