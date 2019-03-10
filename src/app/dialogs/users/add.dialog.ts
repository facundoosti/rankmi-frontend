import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users.dialog',
  templateUrl: '../../dialogs/users/add.dialog.html',
  styleUrls: ['../../dialogs/users/add.dialog.css']
})

export class AddDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public user: User,
              public userService: UserService) { }

  formControl = new FormControl('', [
    Validators.required
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' : '';
  }

  submit() {
  }

  closeClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.userService.createUser(this.user).subscribe(
       response => response
      );
  }
}
