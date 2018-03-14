import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoCurrentUserComponent } from './todo-current-user/todo-current-user.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {TodoService} from './todo.service';
import {MockApiService} from './mock-api.service';
import {MockHttpInterceptor} from './mock-http-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    TodoFormComponent,
    TodoCurrentUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    FormsModule
  ],
  providers: [TodoService,
              MockApiService,
              {
                provide: HTTP_INTERCEPTORS,
                useClass: MockHttpInterceptor,
                multi: true
              }],
  bootstrap: [AppComponent]
})
export class AppModule { }
