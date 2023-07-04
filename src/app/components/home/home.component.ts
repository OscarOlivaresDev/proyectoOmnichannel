import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalViewContactComponent } from '../modal-view-contact/modal-view-contact.component';
import { ModalViewMessageComponent } from '../modal-view-message/modal-view-message.component';
import { ModalViewEditComponent } from '../modal-view-edit/modal-view-edit.component';
import { ModalViewTimeComponent } from '../modal-view-time/modal-view-time.component';
import { ModalViewLikeComponent } from '../modal-view-like/modal-view-like.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public dialog: MatDialog){}

  selectUsers : any [] = ['Anónimo', 'María José', 'Carlos'];
  fecha : Date = new Date();
  message : string[] = ["Hola!"];

  searchControl = new FormControl('');
  chatListControl = new FormControl();

  // Open Modals.
  openDialogCardContact(): void{
    this.dialog.open(ModalViewContactComponent);
  }
  openDialogCardMessage(): void{
    this.dialog.open(ModalViewMessageComponent);
  }
  openDialogCardEdit(): void{
    this.dialog.open(ModalViewEditComponent);
  }
  openDialogCardTime(): void{
    this.dialog.open(ModalViewTimeComponent);
  }
  openDialogCardLike(): void{
    this.dialog.open(ModalViewLikeComponent);
  }
  

}
