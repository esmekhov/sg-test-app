import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCounterComponent } from './header-counter.component';

describe('HeaderCounterComponent', () => {
  let component: HeaderCounterComponent;
  let fixture: ComponentFixture<HeaderCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
