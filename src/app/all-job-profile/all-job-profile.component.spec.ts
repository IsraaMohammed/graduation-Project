import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllJobProfileComponent } from './all-job-profile.component';

describe('AllJobProfileComponent', () => {
  let component: AllJobProfileComponent;
  let fixture: ComponentFixture<AllJobProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllJobProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllJobProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
