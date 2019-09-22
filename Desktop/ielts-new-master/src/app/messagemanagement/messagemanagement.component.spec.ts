import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagemanagementComponent } from './messagemanagement.component';

describe('MessagemanagementComponent', () => {
  let component: MessagemanagementComponent;
  let fixture: ComponentFixture<MessagemanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagemanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
