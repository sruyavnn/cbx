import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreelistviewComponent } from './treelistview.component';

describe('TreelistviewComponent', () => {
  let component: TreelistviewComponent;
  let fixture: ComponentFixture<TreelistviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreelistviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreelistviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
