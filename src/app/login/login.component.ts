
// // src/app/login/login.component.ts
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { AuthService } from '../core/auth.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
// })
// export class LoginComponent {
//   loginForm: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//     private auth: AuthService,
//     private router: Router
//   ) {
//     this.loginForm = this.fb.group({
//       email: ['eve.holt@reqres.in', [Validators.required, Validators.email]],
//       password: ['cityslicka', Validators.required],
//     });
//   }

//   login() {
//     if (this.loginForm.invalid) {
//       return alert('Form invalid. Please complete both fields.');
//     }

//     console.log('Submitting login:', this.loginForm.value);

//     this.auth.login(this.loginForm.value).subscribe({
//       next: token => {
//         console.log('> Received token:', token);
//         localStorage.setItem('token', token);
//         this.router.navigate(['/dashboard']).then(ok =>
//           console.log('Navigation to /dashboard successful?', ok)
//         );
//       },
//       error: err => {
//         console.error('>> LOGIN ERROR:', err);
//         // try to extract a friendly message
//         const msg =
//           err.error?.error ??
//           err.message ??
//           `Status ${err.status}`;
//         alert('Login failed: ' + msg);
//       }
//     });
//   }
// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  handleLogin(): void {
    const payload = {
      username: this.username,
      password: this.password,
    };

    this.http
      .post<any>('http://localhost:5062/api/Auth/login', payload, {
        headers: new HttpHeaders({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      .subscribe({
        next: (data) => {
          console.log('API Response:', data);

          if (data && data.token) {
            localStorage.setItem('apiKey', data.token);
            localStorage.setItem('userId', data.userId);
            localStorage.setItem('userName', data.userName);

            const authHeaders = {
              authorizationheader: `Bearer ${data.token}`,
              'Content-Type': 'application/json',
            };
            localStorage.setItem('authHeaders', JSON.stringify(authHeaders));

            const branchUsers = [
              'JeddahHarmainUser',
              'MakkahUser',
              'YanbuUser',
              'TaifUser',
              'AbhaUser',
              'NajranUser',
              'TabukUser',
            ];

            if (data.userName === 'AccountantUser') {
              this.router.navigate(['/accountant']);
            } else if (branchUsers.includes(data.userName)) {
              this.router.navigate(['/branch']);
            } else {
              alert('Invalid Username! No route assigned.');
            }
          } else {
            alert(data.message || 'Login Failed');
          }
        },
        error: (err) => {
          console.error('Login error:', err);
          alert('An error occurred. Please try again later.');
        },
      });
  }
}
