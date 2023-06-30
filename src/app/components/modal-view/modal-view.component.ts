import { Component } from '@angular/core';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.css']
})
export class ModalViewComponent {

  modalSwitch:boolean | undefined;
  constructor(public dialog: MatDialog) {}

  openModal(){
    this.modalSwitch = true;
  }

}
