import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckauthComponent } from './checkauth.component';

describe('CheckauthComponent', () => {
  let component: CheckauthComponent;
  let fixture: ComponentFixture<CheckauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
