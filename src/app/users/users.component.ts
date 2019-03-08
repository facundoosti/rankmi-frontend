import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

//export interface User {
//nombre: string;
//area: string;
//mundo: string;
//cargo: string;
//}

//const USERS: User[] = [
// { nombre: 'pepe', area: 'pepe' ,mundo: 'pepe' ,cargo: 'pepe' }
//];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'cargo', 'area', 'mundo'];
  dataSource: User[] = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (response) => {
          this.dataSource = response;
      }
    );
  }

}
