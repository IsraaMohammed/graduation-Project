import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserjobprofilesComponent } from './userjobprofiles.component';

describe('UserjobprofilesComponent', () => {
  let component: UserjobprofilesComponent;
  let fixture: ComponentFixture<UserjobprofilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserjobprofilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserjobprofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
