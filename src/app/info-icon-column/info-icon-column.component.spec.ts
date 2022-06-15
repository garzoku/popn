import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoIconColumnComponent } from './info-icon-column.component';

describe('InfoIconColumnComponent', () => {
  let component: InfoIconColumnComponent;
  let fixture: ComponentFixture<InfoIconColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoIconColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoIconColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
