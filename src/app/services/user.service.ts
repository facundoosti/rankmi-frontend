import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, UserAdapter } from '../models/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private adapter: UserAdapter,
  ) {}

  getUsers(): Observable<User[]> {
    return this.http.get(`${this.apiURL}/users`).pipe(
      map((data: any[]) => data.map(item => this.adapter.adapt(item))),
    );
  }
 }
