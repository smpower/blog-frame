import { Component, /* NO_ERRORS_SCHEMA */ } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

@Component({selector: 'app-toolbar', template: ''})
class AppToolbarComponent {}

@Component({selector: 'router-outlet', template: ''})
class RouterOutletComponent {}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AppToolbarComponent,
        RouterOutletComponent
      ],
      // schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});