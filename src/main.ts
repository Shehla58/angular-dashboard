
// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideHttpClient } from '@angular/common/http';
// import { provideRouter } from '@angular/router';
// import { AppComponent } from './app/app.component';
// import { routes } from './app/app.routes';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideHttpClient(),
//     provideRouter(routes),
//   ],
// }).catch(err => console.error(err));

// src/main.ts
// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
// import { provideRouter } from '@angular/router';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';

// import { AppComponent } from './app/app.component';
// import { routes } from './app/app.routes';
// import { FakeBackendInterceptor } from './app/core/fake-backend.interceptor';

// bootstrapApplication(AppComponent, {
//   providers: [
//     // sets up HttpClient and picks up any HTTP_INTERCEPTORS
//     provideHttpClient(withInterceptorsFromDi()),

//     // register our fake-backend interceptor
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: FakeBackendInterceptor,
//       multi: true
//     },

//     // set up the router
//     provideRouter(routes),
//   ]
// }).catch(err => console.error(err));

// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { provideRouter } from '@angular/router';
// import { MatSnackBarModule } from '@angular/material/snack-bar';


// import { AppComponent } from './app/app.component';
// import { routes } from './app/app.routes';
// import { FakeBackendInterceptor } from './app/core/fake-backend.interceptor';

// bootstrapApplication(AppComponent, {
//   providers: [
//     // 1) Setup HttpClient *and* allow interceptors from DI
//     provideHttpClient(withInterceptorsFromDi()),

//     // 2) Register our fake backend
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: FakeBackendInterceptor,
//       multi: true
      
//     },

//     // 3) Setup Router
//     provideRouter(routes)
//   ]
// }).catch(err => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { FakeBackendInterceptor } from './app/core/fake-backend.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    // ✅ Setup HttpClient & interceptors
    provideHttpClient(withInterceptorsFromDi()),

    // ✅ Register fake backend interceptor
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true
    },

    // ✅ Router
    provideRouter(routes),

    // ✅ Required for Angular Material animations
    provideAnimations(),

    // ✅ Import MatSnackBarModule for toasts
    importProvidersFrom(MatSnackBarModule)
  ]
}).catch(err => console.error(err));
