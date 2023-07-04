import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewMessageComponent } from './modal-view-message.component';

describe('ModalViewMessageComponent', () => {
  let component: ModalViewMessageComponent;
  let fixture: ComponentFixture<ModalViewMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalViewMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalViewMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
