import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'familia', 'details'];
  dataSource: User[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.filterUsers();
  }

  filter(value: string) {
    this.filterUsers(value);
  }

  filterUsers(value?: string) {
    this.userService.getUsers(value).subscribe(
      (response) => {
        this.dataSource = response;
      }
    );
  }

  redirectToDetails(id: string) {

  }
}
