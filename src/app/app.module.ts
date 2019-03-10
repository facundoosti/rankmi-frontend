import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule,
         MatCheckboxModule,
         MatTableModule,
         MatInputModule,
         MatFormFieldModule,
         MatIconModule,
         MatCardModule,
         MatDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AddDialogComponent } from './dialogs/users/add.dialog';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailComponent } from './user-detail/user-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddDialogComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    MatDialogModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [
    AddDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
