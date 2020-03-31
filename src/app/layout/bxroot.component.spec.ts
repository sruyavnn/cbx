import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BxrootComponent } from './bxroot.component';

describe('BxrootComponent', () => {
  let component: BxrootComponent;
  let fixture: ComponentFixture<BxrootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BxrootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BxrootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
