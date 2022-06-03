import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPageViewComponent } from './activity-page-view.component';

describe('ActivityPageViewComponent', () => {
  let component: ActivityPageViewComponent;
  let fixture: ComponentFixture<ActivityPageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityPageViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
