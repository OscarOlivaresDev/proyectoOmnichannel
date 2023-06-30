import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  selectUsers : any [] = ['Anónimo', 'María José', 'Carlos'];
  fecha : Date = new Date();
  message : string[] = ["Hola!"];

  searchControl = new FormControl('');
  chatListControl = new FormControl();

}
