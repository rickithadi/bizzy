// import { Injectable } from '@angular/core';
// import { User } from './data-model';

// @Injectable()
// export class UserService {
//   private nextId: number;

//   constructor() {
//     let users = this.getusers();
//     if (users.length == 0) {
//       this.nextId = 0;
//     } else {
//       let maxId = users[users.length - 1].id;
//       this.nextId = maxId + 1;
//     }
//   }

//   public adduser(
//     name: string,
//     shots: number,
//     volume: number,
//     modifier: number
//   ): void {
//     let user = new User(this.nextId, name, shots, volume, modifier);
//     let users = this.getusers();
//     users.push(user);

//     this.setLocalStorageusers(users);
//     this.nextId++;
//   }

//   public getusers(): User[] {
//     let localStorageItem = JSON.parse(localStorage.getItem('users'));
//     return localStorageItem == null ? [] : localStorageItem.users;
//   }

//   private setLocalStorageusers(users: User[]): void {
//     localStorage.setItem('users', JSON.stringify({ users: users }));
//   }
//   public removeuser(id: number): void {
//     let users = this.getusers();
//     users = users.filter(user => user.id != id);
//     this.setLocalStorageusers(users);
//   }

//   public moduser(
//     id: number,
//     name: string,
//     shots: number,
//     volume: number,
//     modifier: number
//   ): void {
//     let users = this.getusers();
//     users = users.filter(user => user.id != id);
//     let Muser = new User(id, name, shots, volume, modifier);

//     users.push(Muser);

//     this.setLocalStorageusers(users);
//     console.log(users);
//   }
// }
