import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  /*user$ = this.UsersService.currentUserProfile$;

  users$ = this.UsersService.allUsers$;*/

  searchControl = new FormControl('');
  //constructor(private UsersService: UsersService){}
}
