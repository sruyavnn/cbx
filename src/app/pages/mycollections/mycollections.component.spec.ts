import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycollectionsComponent } from './mycollections.component';

describe('MycollectionsComponent', () => {
  let component: MycollectionsComponent;
  let fixture: ComponentFixture<MycollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
