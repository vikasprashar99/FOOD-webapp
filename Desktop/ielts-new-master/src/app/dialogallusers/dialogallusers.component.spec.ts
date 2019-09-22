import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogallusersComponent } from './dialogallusers.component';

describe('DialogallusersComponent', () => {
  let component: DialogallusersComponent;
  let fixture: ComponentFixture<DialogallusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogallusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogallusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
