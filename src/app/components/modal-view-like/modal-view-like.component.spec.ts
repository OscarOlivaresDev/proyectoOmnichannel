import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewLikeComponent } from './modal-view-like.component';

describe('ModalViewLikeComponent', () => {
  let component: ModalViewLikeComponent;
  let fixture: ComponentFixture<ModalViewLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalViewLikeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalViewLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
