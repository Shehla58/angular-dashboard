// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { NgChartsModule } from 'ng2-charts';
// import { ChartConfiguration, ChartType } from 'chart.js';

// @Component({
//   selector: 'app-user-chart',
//   standalone: true,
//   imports: [CommonModule, NgChartsModule],
//   templateUrl: './user-chart.component.html',
//   styleUrls: ['./user-chart.component.css']
// })
// export class UserChartComponent {
//   public barChartOptions: ChartConfiguration<'bar'>['options'] = {
//     responsive: true,
//   };

//   public barChartType: ChartType = 'bar';

//   public barChartData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//     datasets: [
//       { data: [65, 59, 80, 81, 56], label: 'New Users' },
//       { data: [28, 48, 40, 19, 86], label: 'Active Users' }
//     ]
//   };
// }

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { NgChartsModule } from 'ng2-charts';
// import { ChartConfiguration, ChartType } from 'chart.js';

// @Component({
//   selector: 'app-user-chart',
//   standalone: true,
//   imports: [CommonModule, NgChartsModule],
//   templateUrl: './user-chart.component.html',
//   styleUrls: ['./user-chart.component.css']
// })
// export class UserChartComponent {
//   public barChartOptions: ChartConfiguration<'bar'>['options'] = {
//     responsive: true,
//   };

//   public barChartType: ChartType = 'bar';

//   public barChartData: ChartConfiguration<'bar'>['data'] = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//     datasets: [
//       { data: [65, 59, 80, 81, 56], label: 'New Users' },
//       { data: [28, 48, 40, 19, 86], label: 'Active Users' }
//     ]
//   };
// }

// import { ChartData, ChartOptions } from 'chart.js';

// public barChartOptions: ChartOptions<'bar'> = {
//   responsive: true,
// };

// public barChartType: ChartType = 'bar';

// public barChartData: ChartData<'bar'> = {
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//   datasets: [
//     { data: [65, 59, 80, 81, 56], label: 'New Users' },
//     { data: [28, 48, 40, 19, 86], label: 'Active Users' }
//   ]
// };

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { NgChartsModule } from 'ng2-charts';
// import { ChartData, ChartOptions, ChartType } from 'chart.js';
// @Component({
//   selector: 'app-user-chart',
//   standalone: true,
//   imports: [CommonModule, NgChartsModule],
//   templateUrl: './user-chart.component.html',
//   styleUrls: ['./user-chart.component.css']
// })
// export class UserChartComponent {
//   public barChartOptions: ChartOptions<'bar'> = {
//     responsive: true,
//   };

//   public barChartType: ChartType = 'bar';

//   public barChartData: ChartData<'bar'> = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//     datasets: [
//       { data: [65, 59, 80, 81, 56], label: 'New Users' },
//       { data: [28, 48, 40, 19, 86], label: 'Active Users' }
//     ]
//   };
// }

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { NgChartsModule } from 'ng2-charts';
// import { ChartData, ChartOptions, ChartType } from 'chart.js';

// // ✅ Import and register required Chart.js components for bar charts
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// @Component({
//   selector: 'app-user-chart',
//   standalone: true,
//   imports: [CommonModule, NgChartsModule],
//   templateUrl: './user-chart.component.html',
//   styleUrls: ['./user-chart.component.css']
// })
// export class UserChartComponent {
//   public barChartOptions: ChartOptions<'bar'> = {
//     responsive: true,
//   };

//   public barChartType: ChartType = 'bar';

//   public barChartData: ChartData<'bar'> = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//     datasets: [
//       { data: [65, 59, 80, 81, 56], label: 'New Users' },
//       { data: [28, 48, 40, 19, 86], label: 'Active Users' }
//     ]
//   };
// }

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { NgChartsModule } from 'ng2-charts'; // ✅ Safe after reinstalling 4.1.1
// import {
//   ChartData,
//   ChartOptions,
//   ChartType,
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// @Component({
//   selector: 'app-user-chart',
//   standalone: true,
//   imports: [CommonModule, NgChartsModule],
//   templateUrl: './user-chart.component.html',
//   styleUrls: ['./user-chart.component.css']
// })
// export class UserChartComponent {
//   public barChartOptions: ChartOptions<'bar'> = {
//     responsive: true,
//   };

//   public barChartType: ChartType = 'bar';

//   public barChartData: ChartData<'bar'> = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//     datasets: [
//       { data: [65, 59, 80, 81, 56], label: 'New Users' },
//       { data: [28, 48, 40, 19, 86], label: 'Active Users' }
//     ]
//   };
// }

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { NgChartsModule } from 'ng2-charts';
// import {
//   ChartData,
//   ChartOptions,
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// @Component({
//   selector: 'app-user-chart',
//   standalone: true,
//   imports: [CommonModule, NgChartsModule],
//   templateUrl: './user-chart.component.html',
//   styleUrls: ['./user-chart.component.css']
// })
// export class UserChartComponent {
//   public barChartOptions: ChartOptions<'bar'> = {
//     responsive: true,
//   };

//   public barChartType: 'bar' = 'bar'; // ✅ fixed

//   public barChartData: ChartData<'bar'> = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//     datasets: [
//       { data: [65, 59, 80, 81, 56], label: 'New Users' },
//       { data: [28, 48, 40, 19, 86], label: 'Active Users' }
//     ]
//   };
// }

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { NgChartsModule } from 'ng2-charts';
// import {
//   ChartData,
//   ChartOptions,
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js';
// import { MatSnackBar } from '@angular/material/snack-bar';


// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// @Component({
//   selector: 'app-user-chart',
//   standalone: true,
//   imports: [CommonModule, NgChartsModule],
//   templateUrl: './user-chart.component.html',
//   styleUrls: ['./user-chart.component.css']
// })
// export class UserChartComponent {
//   public barChartOptions: ChartOptions<'bar'> = {
//     responsive: true,
//   };

//   public barChartType: 'bar' = 'bar'; // ✅ literal string only

//   public barChartData: ChartData<'bar'> = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//     datasets: [
//       { data: [65, 59, 80, 81, 56], label: 'New Users' },
//       { data: [28, 48, 40, 19, 86], label: 'Active Users' }
//     ]
//   };
// }

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { NgChartsModule } from 'ng2-charts';
// import {
//   ChartData,
//   ChartOptions,
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js';
// import { MatSnackBar } from '@angular/material/snack-bar';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// @Component({
//   selector: 'app-user-chart',
//   standalone: true,
//   imports: [CommonModule, NgChartsModule],
//   templateUrl: './user-chart.component.html',
//   styleUrls: ['./user-chart.component.css']
// })
// export class UserChartComponent {
//   public barChartOptions: ChartOptions<'bar'> = {
//     responsive: true,
//   };

//   public barChartType: 'bar' = 'bar'; // ✅ literal string only

//   public barChartData: ChartData<'bar'> = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//     datasets: [
//       { data: [65, 59, 80, 81, 56], label: 'New Users' },
//       { data: [28, 48, 40, 19, 86], label: 'Active Users' }
//     ]
//   };

//   // ✅ Inject MatSnackBar
//   constructor(private snackBar: MatSnackBar) {}

//   // ✅ Trigger snack bar
//   showLoginSuccess(): void {
//     this.snackBar.open('Login successful!', 'Close', {
//       duration: 3000,
//       horizontalPosition: 'right',
//       verticalPosition: 'top',
//     });
//   }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import {
  ChartData,
  ChartOptions,
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { MatSnackBar } from '@angular/material/snack-bar';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

@Component({
  selector: 'app-user-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './user-chart.component.html',
  styleUrls: ['./user-chart.component.css']
})
export class UserChartComponent {
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
  };

  public barChartType: 'bar' = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      { data: [65, 59, 80, 81, 56], label: 'New Users' },
      { data: [28, 48, 40, 19, 86], label: 'Active Users' }
    ]
  };

  constructor(private snackBar: MatSnackBar) {}

  loginSuccess(): void {
    this.snackBar.open('Login successful!', 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: ['custom-snackbar'] // 👈 apply custom styling
    });
  }
}

