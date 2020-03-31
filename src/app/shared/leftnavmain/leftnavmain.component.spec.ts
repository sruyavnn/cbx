import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftnavmainComponent } from './leftnavmain.component';

describe('LeftnavmainComponent', () => {
  let component: LeftnavmainComponent;
  let fixture: ComponentFixture<LeftnavmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftnavmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftnavmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
