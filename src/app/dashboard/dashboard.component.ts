// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';
// import { AuthService } from '../core/auth.service';

// @Component({
//   selector: 'app-dashboard',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css'],
// })
// export class DashboardComponent {
//   constructor(private auth: AuthService, private router: Router) {}

//   logout() {
//     this.auth.logout();
//     this.router.navigate(['/login']);
//   }
// }

// src/app/dashboard/dashboard.component.ts
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';
// import { AuthService } from '../core/auth.service';

// @Component({
//   selector: 'app-dashboard',
//   standalone: true,
//   imports: [CommonModule],
//   template: `
//     <h1>Dashboard</h1>
//     <button (click)="logout()">Logout</button>
//   `,
// })
// export class DashboardComponent {
//   constructor(private auth: AuthService, private router: Router) {}
//   logout() {
//     this.auth.logout();
//     this.router.navigate(['/login']);
//   }
// }

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';
// import { AuthService } from '../core/auth.service';
// import { UserTableComponent } from '../user-table/user-table.component';
// @Component({
//   selector: 'app-dashboard',
//   standalone: true,
//   imports: [CommonModule],
//   UserTableComponent,

//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']

// })
// export class DashboardComponent {
//   constructor(private auth: AuthService, private router: Router) {}

//   logout() {
//     this.auth.logout();
//     this.router.navigate(['/login']);
//   }
// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { UserTableComponent } from '../user-table/user-table.component'; // ✅ Make sure this path is correct
import { UserChartComponent } from '../user-chart.component';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, UserTableComponent, UserChartComponent], // ✅ Moved here correctly in array
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
