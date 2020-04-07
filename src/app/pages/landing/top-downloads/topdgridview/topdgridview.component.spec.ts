import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopdgridviewComponent } from './topdgridview.component';

describe('TopdgridviewComponent', () => {
  let component: TopdgridviewComponent;
  let fixture: ComponentFixture<TopdgridviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopdgridviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopdgridviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
