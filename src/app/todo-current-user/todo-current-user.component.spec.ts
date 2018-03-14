import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCurrentUserComponent } from './todo-current-user.component';

describe('TodoCurrentUserComponent', () => {
  let component: TodoCurrentUserComponent;
  let fixture: ComponentFixture<TodoCurrentUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoCurrentUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCurrentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
