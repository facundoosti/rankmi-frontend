import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const baseUrl = 'http://localhost:3000/users';

@Injectable({

  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {}

  getUsers(query?: string): Observable<User[]> {
    let params = {};
    if (query) {
      params = { params: { query: query } };
    }
    return this.http.get<User[]>(baseUrl, params);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(baseUrl, user, httpOptions);
  }
}
