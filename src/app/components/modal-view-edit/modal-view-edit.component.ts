import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateNoteComponent } from '../create-note/create-note.component';

@Component({
  selector: 'app-modal-view-edit',
  templateUrl: './modal-view-edit.component.html',
  styleUrls: ['./modal-view-edit.component.css']
})
export class ModalViewEditComponent {

  constructor(public dialog: MatDialog){}

  selectNote : any [] = ['El paciente pidió una cita y no aparecia en el sistema',
   'Este es un mensaje de pruebas para probar las notas rapidas del sistema en el diseño preliminar esperando una aprobación.', 
   'El paciente pidió una cita y no le aparecia en el sistema',
   'Este es un mensaje de pruebas para probar las notas rapidas del sistema en el diseño preliminar esperando una aprobación.'];

   //Open Modal.
   openDialogCreateNote(): void{
    this.dialog.open(CreateNoteComponent);
  }
}
