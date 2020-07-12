import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCartContentComponent } from './dialog-cart-content.component';

describe('DialogCartContentComponent', () => {
  let component: DialogCartContentComponent;
  let fixture: ComponentFixture<DialogCartContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCartContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCartContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
