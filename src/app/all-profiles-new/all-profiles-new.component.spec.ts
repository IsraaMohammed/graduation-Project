import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProfilesNewComponent } from './all-profiles-new.component';

describe('AllProfilesNewComponent', () => {
  let component: AllProfilesNewComponent;
  let fixture: ComponentFixture<AllProfilesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllProfilesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProfilesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
