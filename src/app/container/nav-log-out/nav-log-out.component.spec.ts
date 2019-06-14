import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLogOutComponent } from './nav-log-out.component';

describe('NavLogOutComponent', () => {
  let component: NavLogOutComponent;
  let fixture: ComponentFixture<NavLogOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavLogOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLogOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
