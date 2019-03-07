import { Component, OnInit } from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';


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
  dataSource = USERS;

  constructor() { }

  ngOnInit() {
  }

}
