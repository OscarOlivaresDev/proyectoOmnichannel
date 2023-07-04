import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-view-message',
  templateUrl: './modal-view-message.component.html',
  styleUrls: ['./modal-view-message.component.css']
})
export class ModalViewMessageComponent {
  selectMessage : any [] = ['Buenas tardes, en qué le puedo ayudar?',
   'Por favor permanezca en linea estamos validando', 
   'Este es un mensaje predeterminado del sistema',
   'De nada, a continuación le enviaremos una breve encuesta'];
}
