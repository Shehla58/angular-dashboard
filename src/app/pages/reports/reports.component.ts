
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { NgChartsModule } from 'ng2-charts';
// import { ChartConfiguration } from 'chart.js';

// interface Report {
//   title: string;
//   value: string;
//   trend: number;
//   color: string;
// }

// @Component({
//   selector: 'app-reports',
//   standalone: true,
//   imports: [CommonModule, NgChartsModule],
//   templateUrl: './reports.component.html',
//   styleUrls: ['./reports.component.scss'], // ✅ make sure this file exists
// })
// export class ReportsComponent {
//   reports: Report[] = [
//     { title: 'Total Users', value: '1,200', trend: 12, color: 'bg-blue-500' },
//     { title: 'Active Users', value: '875', trend: 8, color: 'bg-green-500' },
//     { title: 'Sales', value: '$32,000', trend: 15, color: 'bg-purple-500' },
//   ];

//   chartData: ChartConfiguration<'line'>['data'] = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//     datasets: [
//       {
//         data: [100, 200, 300, 250, 400],
//         label: 'Monthly Sales',
//         fill: true,
//         borderColor: 'rgb(75,192,192)',
//         tension: 0.4,
//       },
//     ],
//   };

//   chartOptions: ChartConfiguration<'line'>['options'] = {
//     responsive: true,
//   };
// }

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { NgChartsModule } from 'ng2-charts';
// import { ChartConfiguration } from 'chart.js';

// interface Report {
//   title: string;
//   value: string;
//   trend: number;
//   color: string;
// }

// @Component({
//   selector: 'app-reports',
//   standalone: true,
//   imports: [CommonModule, NgChartsModule],
//   templateUrl: './reports.component.html',
//   styleUrls: ['./reports.component.scss'], // Keep empty or add custom styles here
// })
// export class ReportsComponent {
//   reports: Report[] = [
//     { title: 'Total Users', value: '1,200', trend: 12, color: 'bg-blue-600' },
//     { title: 'Active Users', value: '875', trend: 8, color: 'bg-green-600' },
//     { title: 'Sales', value: '$32,000', trend: 15, color: 'bg-purple-600' },
//   ];

//   chartData: ChartConfiguration<'line'>['data'] = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//     datasets: [
//       {
//         data: [100, 200, 300, 250, 400],
//         label: 'Monthly Sales',
//         fill: true,
//         borderColor: 'rgb(75,192,192)',
//         backgroundColor: 'rgba(75,192,192,0.3)',
//         tension: 0.4,
//       },
//     ],
//   };

//   chartOptions: ChartConfiguration<'line'>['options'] = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       tooltip: {
//         enabled: true,
//         mode: 'index',
//         intersect: false,
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   // Sort reports either by trend or by value (numeric)
//   sortBy(field: 'trend' | 'value'): void {
//     if (field === 'trend') {
//       this.reports.sort((a, b) => b.trend - a.trend);
//     } else if (field === 'value') {
//       // Convert value string to number (remove commas or $ signs)
//       const parseValue = (v: string) => Number(v.replace(/[$,]/g, ''));
//       this.reports.sort((a, b) => parseValue(b.value) - parseValue(a.value));
//     }
//   }
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

interface Report {
  title: string;
  value: string;
  trend: number;
  color: string;
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent {
  reports: Report[] = [
    { title: 'Total Users', value: '1,200', trend: 12, color: 'bg-blue-600' },
    { title: 'Active Users', value: '875', trend: 8, color: 'bg-green-600' },
    { title: 'Sales', value: '$32,000', trend: 15, color: 'bg-purple-600' },
  ];

  chartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        data: [100, 200, 300, 250, 400],
        label: 'Monthly Sales',
        fill: true,
        borderColor: 'rgb(75,192,192)',
        backgroundColor: 'rgba(75,192,192,0.3)',
        tension: 0.4,
      },
    ],
  };

  chartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      tooltip: { enabled: true, mode: 'index', intersect: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  sortBy(field: 'trend' | 'value'): void {
    if (field === 'trend') {
      this.reports.sort((a, b) => b.trend - a.trend);
    } else if (field === 'value') {
      const parseValue = (v: string) => Number(v.replace(/[$,]/g, ''));
      this.reports.sort((a, b) => parseValue(b.value) - parseValue(a.value));
    }
  }
}
