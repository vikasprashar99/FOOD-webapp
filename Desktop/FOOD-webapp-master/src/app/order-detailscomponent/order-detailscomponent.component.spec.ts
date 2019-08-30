import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailscomponentComponent } from './order-detailscomponent.component';

describe('OrderDetailscomponentComponent', () => {
  let component: OrderDetailscomponentComponent;
  let fixture: ComponentFixture<OrderDetailscomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailscomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
