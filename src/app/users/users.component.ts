import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AddDialogComponent } from '../dialogs/users/add.dialog';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'familia', 'details'];
  dataSource: Observable<User[]>;
  filterValue: string = '';

  constructor(
    private userService: UserService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.filterValue = localStorage.getItem('filter');
    this.filterUsers(this.filterValue);
  }

  filter(value: string) {
    localStorage.setItem('filter', value);
    this.filterUsers(value);
  }

  filterUsers(value?: string) {
    this.dataSource = this.userService.getUsers(value);
  }

  addNew(user: User) {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      data: { user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.filterUsers();
      }
    });
  }
}
