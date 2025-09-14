// src/app/core/fake-backend.interceptor.ts
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError, Observable } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Catch POST to '/api/auth/login'
    if (req.url.endsWith('/api/auth/login') && req.method === 'POST') {
      const { email, password } = req.body;
      if (email === 'eve.holt@reqres.in' && password === 'cityslicka') {
        return of(new HttpResponse({
          status: 200,
          body: { token: 'dummy-jwt-token-123456' }
        })).pipe(delay(500));
      } else {
        return throwError(() =>
          new HttpErrorResponse({
            status: 401,
            error: { message: 'Invalid credentials' }
          })
        ).pipe(delay(500));
      }
    }
    // Let all other requests pass through
    return next.handle(req);
  }
}


// @Injectable()  // ← no standalone: true here
// export class FakeBackendInterceptor implements HttpInterceptor {
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // only handle our fake login endpoint
//     if (req.url.endsWith('/api/auth/login') && req.method === 'POST') {
//       const { email, password } = req.body;
//       if (email === 'eve.holt@reqres.in' && password === 'cityslicka') {
//         return of(new HttpResponse({
//           status: 200,
//           body: { token: 'dummy-jwt-token-123456' }
//         })).pipe(delay(500));
//       } else {
//         return throwError(() =>
//           new HttpErrorResponse({
//             status: 401,
//             statusText: 'Unauthorized',
//             error: { message: 'Invalid credentials' }
//           })
//         ).pipe(delay(500));
//       }
//     }
//     // pass through any other requests
//     return next.handle(req);
//   }
// }
