import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewContactComponent } from './modal-view-contact.component';

describe('ModalViewContactComponent', () => {
  let component: ModalViewContactComponent;
  let fixture: ComponentFixture<ModalViewContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalViewContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalViewContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
