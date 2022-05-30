import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindWhatsPopnComponent } from './find-whats-popn.component';

describe('FindWhatsPopnComponent', () => {
  let component: FindWhatsPopnComponent;
  let fixture: ComponentFixture<FindWhatsPopnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindWhatsPopnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindWhatsPopnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
