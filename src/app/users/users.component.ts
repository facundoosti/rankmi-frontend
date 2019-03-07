import { Component, OnInit } from '@angular/core';

export interface User {
  nombre: string;
  area: string;
  mundo: string;
  cargo: string;
}

const USERS: User[] = [
 { nombre: 'pepe', area: 'pepe' ,mundo: 'pepe' ,cargo: 'pepe' }
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'cargo', 'area', 'mundo'];
  dataSource = USERS;

  constructor() { }

  ngOnInit() {
  }

}
