import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterprisenotificationComponent } from './enterprisenotification.component';

describe('EnterprisenotificationComponent', () => {
  let component: EnterprisenotificationComponent;
  let fixture: ComponentFixture<EnterprisenotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterprisenotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterprisenotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
