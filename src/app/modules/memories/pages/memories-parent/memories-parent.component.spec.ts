import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriesParentComponent } from './memories-parent.component';

describe('MemoriesParentComponent', () => {
  let component: MemoriesParentComponent;
  let fixture: ComponentFixture<MemoriesParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoriesParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoriesParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
