import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpasswordrequiredComponent } from './newpasswordrequired.component';

describe('NewpasswordrequiredComponent', () => {
  let component: NewpasswordrequiredComponent;
  let fixture: ComponentFixture<NewpasswordrequiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpasswordrequiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpasswordrequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
