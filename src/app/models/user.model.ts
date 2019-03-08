import { Injectable } from '@angular/core';

export interface Adapter<T> {
    adapt(item: any): T;
}

export class User {
  constructor(
    public id: number,
    public nombre: string,
    public cargo: string,
    public area: string,
    public mundo: string,
  ) { }
}

@Injectable({
    providedIn: 'root'
})
export class UserAdapter implements Adapter<User> {

  adapt(item: any): User {
    return new User(
        item.id,
        item.nombre,
        item.cargo,
        item.area,
        item.mundo,
    );
  }
}
