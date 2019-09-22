import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEnterprisecreateComponent } from './dialog-enterprisecreate.component';

describe('DialogEnterprisecreateComponent', () => {
  let component: DialogEnterprisecreateComponent;
  let fixture: ComponentFixture<DialogEnterprisecreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEnterprisecreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEnterprisecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
