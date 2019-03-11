import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({

  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient
  ) {}

  getUsers(query?: string): Observable<User[]> {
    let params = {};
    if (query) {
      params = { params: { query: query } };
    }
    return this.http.get<User[]>(this.baseUrl, params);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user, httpOptions);
  }
}
