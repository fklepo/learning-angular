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
import {TodoAppActionCreator} from './redux/action-creator';
import {todoStoreProviders} from './redux/store';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'todo/list', component: TodoListComponent },
  { path: 'todo/new', component: TodoFormComponent },
  { path: 'todo/:id', component: TodoComponent },
  { path: '', redirectTo: '/todo/list', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    TodoFormComponent,
    TodoCurrentUserComponent,
    PageNotFoundComponent
  ],
  providers: [TodoService,
              MockApiService,
              {
                provide: HTTP_INTERCEPTORS,
                useClass: MockHttpInterceptor,
                multi: true
              },
              TodoAppActionCreator,
              todoStoreProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
