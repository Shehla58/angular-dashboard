// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { MatTableModule } from '@angular/material/table';
// import { MatButtonModule } from '@angular/material/button';
// import { MatDialog, MatDialogModule } from '@angular/material/dialog';
// import { UserFormComponent } from '../user-form/user-form.component';
// import { MatSnackBar } from '@angular/material/snack-bar';

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   role: string;
// }

// @Component({
//   selector: 'app-user-list',
//   standalone: true,
//   imports: [CommonModule, MatTableModule, MatButtonModule, MatDialogModule],
//   templateUrl: './user-list.component.html',
//   styleUrls: ['./user-list.component.css']
// })
// export class UserListComponent {
//   displayedColumns = ['id', 'name', 'email', 'role', 'actions'];
//   users: User[] = [
//     { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
//     { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' }
//   ];

//   constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {}

//   openForm(user?: User) {
//     const dialogRef = this.dialog.open(UserFormComponent, {
//       width: '400px',
//       data: user
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         if (user) {
//           user.name = result.name;
//           user.email = result.email;
//           user.role = result.role;
//           this.snackBar.open('User updated!', 'Close', { duration: 2000 });
//         } else {
//           const newUser = { ...result, id: this.users.length + 1 };
//           this.users.push(newUser);
//           this.snackBar.open('User added!', 'Close', { duration: 2000 });
//         }
//       }
//     });
//   }

//   deleteUser(index: number) {
//     this.users.splice(index, 1);
//     this.snackBar.open('User deleted!', 'Close', { duration: 2000 });
//   }
// }

// // user-list.component.ts
// import { Component, signal } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { MatTableModule } from '@angular/material/table';
// import { MatButtonModule } from '@angular/material/button';
// import { MatInputModule } from '@angular/material/input';
// import { FormsModule } from '@angular/forms';
// import { MatIconModule } from '@angular/material/icon';
// import { MatSnackBar } from '@angular/material/snack-bar';

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// @Component({
//   selector: 'app-user-list',
//   standalone: true,
//   imports: [
//     CommonModule,
//     MatTableModule,
//     MatButtonModule,
//     MatInputModule,
//     MatIconModule,
//     FormsModule
//   ],
//   templateUrl: './user-list.component.html',
//   styleUrls: ['./user-list.component.css']
// })
// export class UserListComponent {
//   search = '';
//   users = signal<User[]>([
//     { id: 1, name: 'Ali Khan', email: 'ali@example.com' },
//     { id: 2, name: 'Sara Malik', email: 'sara@example.com' }
//   ]);

//   constructor(private snackBar: MatSnackBar) {}

//   get filteredUsers(): User[] {
//     return this.users().filter(u =>
//       u.name.toLowerCase().includes(this.search.toLowerCase())
//     );
//   }

//   deleteUser(id: number) {
//     this.users.update(users => users.filter(u => u.id !== id));
//     this.snackBar.open('User deleted', 'Close', { duration: 2000 });
//   }

//   addUser() {
//     const newId = Math.max(...this.users().map(u => u.id)) + 1;
//     this.users.update(users => [
//       ...users,
//       { id: newId, name: 'New User', email: 'new@example.com' }
//     ]);
//     this.snackBar.open('User added', 'Close', { duration: 2000 });
//   }
// }

// import { Component, signal } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { MatTableModule } from '@angular/material/table';
// import { MatButtonModule } from '@angular/material/button';
// import { MatInputModule } from '@angular/material/input';
// import { FormsModule } from '@angular/forms';
// import { MatIconModule } from '@angular/material/icon';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { MatDialog, MatDialogModule } from '@angular/material/dialog';
// import { EditUserModalComponent } from '../shared/components/edit-user-modal/edit-user-modal.component';

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// @Component({
//   selector: 'app-user-list',
//   standalone: true,
//   imports: [
//     CommonModule,
//     MatTableModule,
//     MatButtonModule,
//     MatInputModule,
//     MatIconModule,
//     MatDialogModule,
//     FormsModule
//   ],
//   templateUrl: './user-list.component.html',
//   styleUrls: ['./user-list.component.css']
// })
// export class UserListComponent {
//   search = '';
//   users = signal<User[]>([
//     { id: 1, name: 'Ali Khan', email: 'ali@example.com' },
//     { id: 2, name: 'Sara Malik', email: 'sara@example.com' }
//   ]);

//   constructor(
//     private snackBar: MatSnackBar,
//     private dialog: MatDialog
//   ) {}

//   get filteredUsers(): User[] {
//     return this.users().filter(u =>
//       u.name.toLowerCase().includes(this.search.toLowerCase())
//     );
//   }

//   deleteUser(id: number) {
//     this.users.update(users => users.filter(u => u.id !== id));
//     this.snackBar.open('User deleted', 'Close', { duration: 2000 });
//   }

//   addUser() {
//     const newId = Math.max(...this.users().map(u => u.id)) + 1;
//     this.users.update(users => [
//       ...users,
//       { id: newId, name: 'New User', email: 'new@example.com' }
//     ]);
//     this.snackBar.open('User added', 'Close', { duration: 2000 });
//   }

//   editUser(user: User) {
//     const dialogRef = this.dialog.open(EditUserModalComponent, {
//       data: { name: user.name, email: user.email }
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         this.users.update(users =>
//           users.map(u => u.id === user.id ? { ...u, ...result } : u)
//         );
//         this.snackBar.open('User updated!', 'Close', { duration: 2000 });
//       }
//     });
//   }
// }

// import { Component, signal, inject, effect } from '@angular/core';
// import { UserService, User } from '../shared/services/shared/services/user.service';
// import { MatSnackBar } from '@angular/material/snack-bar';

// @Component({
//   selector: 'app-user-list',
//   standalone: true,
//   imports: [...],
//   templateUrl: './user-list.component.html',
//   styleUrls: ['./user-list.component.css']
// })
// export class UserListComponent {
//   private userService = inject(UserService);
//   private snackBar = inject(MatSnackBar);

//   search = '';
//   users = signal<User[]>([]);

//   constructor() {
//     this.loadUsers();
//   }

//   loadUsers() {
//     this.userService.getUsers().subscribe(data => this.users.set(data));
//   }

//   get filteredUsers(): User[] {
//     return this.users().filter(u =>
//       u.name.toLowerCase().includes(this.search.toLowerCase())
//     );
//   }

//   deleteUser(id: number) {
//     this.userService.deleteUser(id).subscribe(() => {
//       this.users.update(users => users.filter(u => u.id !== id));
//       this.snackBar.open('User deleted', 'Close', { duration: 2000 });
//     });
//   }

//   addUser() {
//     const newUser: User = {
//       id: 0,
//       name: 'New User',
//       email: 'new@example.com',
//     };
//     this.userService.addUser(newUser).subscribe(added => {
//       this.users.update(users => [...users, added]);
//       this.snackBar.open('User added', 'Close', { duration: 2000 });
//     });
//   }
// }

// import { Component, signal, inject } from '@angular/core';
// import { UserService, User } from '../shared/services/shared/services/user.service';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { MatTableModule } from '@angular/material/table';
// import { FormsModule } from '@angular/forms';
// import { NgIf, NgFor } from '@angular/common';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { MatButtonModule } from '@angular/material/button';

// @Component({
//   selector: 'app-user-list',
//   standalone: true,
//   imports: [
//     MatTableModule,
//     FormsModule,
//     NgIf,
//     NgFor,
//     MatSnackBarModule,
//     MatButtonModule
//   ],
//   templateUrl: './user-list.component.html',
//   styleUrls: ['./user-list.component.css']
// })
// export class UserListComponent {
//   private userService = inject(UserService);
//   private snackBar = inject(MatSnackBar);

//   search = '';
//   users = signal<User[]>([]);

//   displayedColumns: string[] = ['id', 'name', 'email', 'actions'];

//   constructor() {
//     this.loadUsers();
//   }

//   loadUsers() {
//     this.userService.getUsers().subscribe(data => this.users.set(data));
//   }

//   get filteredUsers(): User[] {
//     return this.users().filter(u =>
//       u.name.toLowerCase().includes(this.search.toLowerCase())
//     );
//   }

//   deleteUser(id: number) {
//     this.userService.deleteUser(id).subscribe(() => {
//       this.users.update(users => users.filter(u => u.id !== id));
//       this.snackBar.open('User deleted', 'Close', { duration: 2000 });
//     });
//   }

//   addUser() {
//     const newUser: User = {
//       id: 0,
//       name: 'New User',
//       email: 'new@example.com',
//     };
//     this.userService.addUser(newUser).subscribe(added => {
//       this.users.update(users => [...users, added]);
//       this.snackBar.open('User added', 'Close', { duration: 2000 });
//     });
//   }
// }

// import { Component, inject, signal } from '@angular/core';
// import { UserService, User } from '../shared/services/shared/services/user.service';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { MatDialog } from '@angular/material/dialog';
// import { FormsModule } from '@angular/forms';
// import { NgIf, NgFor } from '@angular/common';
// import { MatTableModule } from '@angular/material/table';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatInputModule } from '@angular/material/input';
// import { MatDialogModule } from '@angular/material/dialog';

// @Component({
//   selector: 'app-user-list',
//   standalone: true,
//   imports: [
//     MatTableModule,
//     MatSnackBarModule,
//     MatButtonModule,
//     MatInputModule,
//     MatDialogModule,
//     FormsModule,
//     NgIf,
//     NgFor,
//   ],
//   templateUrl: './user-list.component.html',
//   styleUrls: ['./user-list.component.css']
// })
// export class UserListComponent {
//   private userService = inject(UserService);
//   private snackBar = inject(MatSnackBar);
//   private dialog = inject(MatDialog);

//   search = '';
//   users = signal<User[]>([], { equal: Object.is });

//   // users = signal<User[]>([]);
//   displayedColumns: string[] = ['id', 'name', 'email', 'actions'];

//   constructor() {
//     this.loadUsers();
//   }

//   loadUsers() {
//     this.userService.getUsers().subscribe(data => this.users.set(data));
//   }

//   get filteredUsers(): User[] {
//     const term = this.search.toLowerCase();
//     return this.users().filter(u =>
//       u.name.toLowerCase().includes(term)
//     );
//   }

//   deleteUser(id: number) {
//     this.userService.deleteUser(id).subscribe(() => {
//       this.users.update(users => users.filter(u => u.id !== id));
//       this.snackBar.open('User deleted', 'Close', { duration: 2000 });
//     });
//   }

//   addOrEditUser(existingUser?: User) {
//     const name = this.search.trim();
//     if (!name) return;

//     if (existingUser) {
//       const updatedUser = { ...existingUser, name };
//       this.userService.updateUser(updatedUser).subscribe(updated => {
//         this.users.update(users => users.map(u => u.id === updated.id ? updated : u));
//         this.snackBar.open('User updated', 'Close', { duration: 2000 });
//       });
//     } else {
//       const newUser: User = {
//         id: 0,
//         name,
//         email: `${name.toLowerCase().replace(/\s/g, '')}@example.com`
//       };
//       this.userService.addUser(newUser).subscribe(added => {
//         this.users.update(users => [...users, added]);
//         this.snackBar.open('User added', 'Close', { duration: 2000 });
//       });
//     }

//     this.search = '';
//   }

//   openEditDialog(user: User) {
//     const name = prompt('Edit User Name:', user.name);
//     if (name && name.trim()) {
//       this.addOrEditUser({ ...user, name: name.trim() });
//     }
//   }
// }

// import { Component, inject, signal } from '@angular/core';
// import { UserService, User } from '../shared/services/shared/services/user.service';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { MatDialog } from '@angular/material/dialog';
// import { FormsModule } from '@angular/forms';
// import { NgIf, NgFor } from '@angular/common';
// import { MatTableModule } from '@angular/material/table';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatInputModule } from '@angular/material/input';
// import { MatDialogModule } from '@angular/material/dialog';

// @Component({
//   selector: 'app-user-list',
//   standalone: true,
//   imports: [
//     MatTableModule,
//     MatSnackBarModule,
//     MatButtonModule,
//     MatInputModule,
//     MatDialogModule,
//     FormsModule,
//     NgIf,
//     NgFor,
//   ],
//   templateUrl: './user-list.component.html',
//   styleUrls: ['./user-list.component.css']
// })
// export class UserListComponent {
//   private userService = inject(UserService);
//   private snackBar = inject(MatSnackBar);
//   private dialog = inject(MatDialog);

//   search = '';
//   // users = signal<User[]>([], { equal: Object.is }); // ✅ fixed signal with second param
// users = signal<User[]>([]); // ✅ Correct way for most Angular setups

//   displayedColumns: string[] = ['id', 'name', 'email', 'actions'];

//   constructor() {
//     this.loadUsers();
//   }

//   loadUsers() {
//     this.userService.getUsers().subscribe(data => this.users.set(data));
//   }

//   get filteredUsers(): User[] {
//     const term = this.search.toLowerCase();
//     return this.users().filter(u =>
//       u.name.toLowerCase().includes(term)
//     );
//   }

//   deleteUser(id: number) {
//     this.userService.deleteUser(id).subscribe(() => {
//       this.users.update(users => users.filter(u => u.id !== id)); // ✅ works now
//       this.snackBar.open('User deleted', 'Close', { duration: 2000 });
//     });
//   }

//   addOrEditUser(existingUser?: User) {
//     const name = this.search.trim();
//     if (!name) return;

//     if (existingUser) {
//       const updatedUser = { ...existingUser, name };
//       this.userService.updateUser(updatedUser).subscribe(updated => {
//         this.users.update(users =>
//           users.map(u => u.id === updated.id ? updated : u)
//         );
//         this.snackBar.open('User updated', 'Close', { duration: 2000 });
//       });
//     } else {
//       const newUser: User = {
//         id: 0,
//         name,
//         email: `${name.toLowerCase().replace(/\s/g, '')}@example.com`
//       };
//       this.userService.addUser(newUser).subscribe(added => {
//         this.users.update(users => [...users, added]); // ✅ now works
//         this.snackBar.open('User added', 'Close', { duration: 2000 });
//       });
//     }

//     this.search = '';
//   }

//   openEditDialog(user: User) {
//     const name = prompt('Edit User Name:', user.name);
//     if (name && name.trim()) {
//       this.addOrEditUser({ ...user, name: name.trim() });
//     }
//   }
// }

import { Component, inject, signal } from '@angular/core';
import { UserService, User } from '../shared/services/shared/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
// import { NgIf, NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    // NgIf,
    // NgFor,
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  private userService = inject(UserService);
  private snackBar = inject(MatSnackBar);
  private dialog = inject(MatDialog);

  search = '';
  users = signal<User[]>([]); // ✅ Correct signal usage
  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];

  constructor() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(data => this.users.set(data));
  }

  get filteredUsers(): User[] {
    const term = this.search.toLowerCase();
    return this.users().filter(u =>
      u.name.toLowerCase().includes(term)
    );
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.users.update(users => users.filter(u => u.id !== id));
      this.snackBar.open('User deleted', 'Close', { duration: 2000 });
    });
  }

  addOrEditUser(existingUser?: User) {
    const name = this.search.trim();
    if (!name) return;

    if (existingUser) {
      const updatedUser = { ...existingUser, name };
      // ✅ Fixed: Passing both ID and object as required by updateUser()
      this.userService.updateUser(updatedUser.id, updatedUser).subscribe(updated => {
        this.users.update(users =>
          users.map(u => u.id === updated.id ? updated : u)
        );
        this.snackBar.open('User updated', 'Close', { duration: 2000 });
      });
    } else {
      const newUser: User = {
        id: 0,
        name,
        email: `${name.toLowerCase().replace(/\s/g, '')}@example.com`
      };
      this.userService.addUser(newUser).subscribe(added => {
        this.users.update(users => [...users, added]);
        this.snackBar.open('User added', 'Close', { duration: 2000 });
      });
    }

    this.search = '';
  }

  openEditDialog(user: User) {
    const name = prompt('Edit User Name:', user.name);
    if (name && name.trim()) {
      this.addOrEditUser({ ...user, name: name.trim() });
    }
  }
}
