import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWhatsPopnComponent } from './add-whats-popn.component';

describe('AddWhatsPopnComponent', () => {
  let component: AddWhatsPopnComponent;
  let fixture: ComponentFixture<AddWhatsPopnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWhatsPopnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWhatsPopnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
