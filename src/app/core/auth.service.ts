// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, map } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private apiUrl = 'https://reqres.in/api/login';

//   constructor(private http: HttpClient) {}

//   login(data: { email: string; password: string }): Observable<string> {
//     return this.http.post<any>(this.apiUrl, data).pipe(map(res => res.token));
//   }

//   logout(): void {
//     localStorage.removeItem('token');
//   }

//   isLoggedIn(): boolean {
//     return !!localStorage.getItem('token');
//   }

//   getToken(): string | null {
//     return localStorage.getItem('token');
//   }
// }


// src/app/core/auth.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { map, Observable } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class AuthService {
//   private apiUrl = 'https://reqres.in/api/login';

//   constructor(private http: HttpClient) {}

//   login(data: { email: string; password: string }): Observable<string> {
//     return this.http
//       .post<{ token: string }>(this.apiUrl, data)      // strongly type JSON
//       .pipe(
//         map(res => {
//           if (!res.token) {
//             throw new Error('No token in response');
//           }
//           return res.token;
//         })
//       );
//   }

//   logout(): void {
//     localStorage.removeItem('token');
//   }

//   isLoggedIn(): boolean {
//     return !!localStorage.getItem('token');
//   }

//   getToken(): string | null {
//     return localStorage.getItem('token');
//   }
// }

// @Injectable({ providedIn: 'root' })
// export class AuthService {
//   // ← use the fake endpoint path, *not* reqres.in
//   private apiUrl = '/api/auth/login';

//   constructor(private http: HttpClient) {}

//   login(data: { email: string; password: string }): Observable<string> {
//     return this.http
//       .post<{ token: string }>(this.apiUrl, data)   // expect JSON { token }
//       .pipe(map(res => res.token));
//   }
//   // … logout, isLoggedIn, etc.
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = '/api/auth/login';

  constructor(private http: HttpClient) {}

  login(data: { email: string; password: string }): Observable<string> {
    return this.http
      .post<{ token: string }>(this.apiUrl, data)
      .pipe(map(res => res.token));
  }

  logout(): void {
    // Remove token on logout
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    // Check if token exists
    return !!localStorage.getItem('token');
  }
}
