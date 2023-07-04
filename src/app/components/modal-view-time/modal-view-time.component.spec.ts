import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewTimeComponent } from './modal-view-time.component';

describe('ModalViewTimeComponent', () => {
  let component: ModalViewTimeComponent;
  let fixture: ComponentFixture<ModalViewTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalViewTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalViewTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
