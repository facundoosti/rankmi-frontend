import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) {}

  getUsers(query?: string): Observable<User[]> {
    const url = 'http://localhost:3000/users';
    let params = {};
    if (query) {
      params = { params: { query: query } };
    }
    return this.http.get<User[]>(url, params);
  }
}
