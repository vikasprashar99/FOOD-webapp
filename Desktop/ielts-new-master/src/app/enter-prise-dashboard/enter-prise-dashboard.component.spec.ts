import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterPriseDashboardComponent } from './enter-prise-dashboard.component';

describe('EnterPriseDashboardComponent', () => {
  let component: EnterPriseDashboardComponent;
  let fixture: ComponentFixture<EnterPriseDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterPriseDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterPriseDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
