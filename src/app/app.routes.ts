


// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { authGuard } from './guards/auth.guard';
import { ReportsComponent } from './pages/reports/reports.component';
import { ActivityLogComponent } from './pages/activity-log/activity-log.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'activity-log',
    component: ActivityLogComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'user-profile',
    loadComponent: () =>
      import('./shared/services/user-profile/user-profile.component').then(m => m.UserProfileComponent)
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/settings/settings.component').then(m => m.SettingsComponent),
    canActivate: [authGuard]
  },
  {
    path: 'notifications',
    loadComponent: () =>
      import('./pages/notifications/notifications.component').then(m => m.NotificationsComponent)
  },
  
 {
  path: 'reports',
  loadComponent: () =>
    import('./pages/reports/reports.component').then(m => m.ReportsComponent)
}


];


  // Wildcard route for unmatched URLs (optional)
  // { path: '**', redirectTo: 'login' }

