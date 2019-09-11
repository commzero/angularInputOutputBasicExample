import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriesChildComponent } from './memories-child.component';

describe('MemoriesChildComponent', () => {
  let component: MemoriesChildComponent;
  let fixture: ComponentFixture<MemoriesChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoriesChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoriesChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
