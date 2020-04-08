import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopdlistviewComponent } from './topdlistview.component';

describe('TopdlistviewComponent', () => {
  let component: TopdlistviewComponent;
  let fixture: ComponentFixture<TopdlistviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopdlistviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopdlistviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
