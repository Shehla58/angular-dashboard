
// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import * as XLSX from 'xlsx';
// import * as FileSaver from 'file-saver';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { MatIconModule } from '@angular/material/icon'; // ✅ Import for Material Icons

// @Component({
//   selector: 'app-activity-log',
//   standalone: true,
//   imports: [CommonModule, FormsModule, MatIconModule],
//   templateUrl: './activity-log.component.html',
//   styleUrls: ['./activity-log.component.css']
// })
// export class ActivityLogComponent implements OnInit {
//   logs: any[] = [];
//   filteredLogs: any[] = [];
//   search: string = '';
//   fromDate?: Date;
//   toDate?: Date;
//   page: number = 1;
//   pageSize: number = 5;
//   totalPages: number = 0;
//   maxVisiblePages: number = 5;

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.fetchLogs();
//   }

//   fetchLogs() {
//     this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe({
//       next: (data) => {
//         this.logs = data.map(item => ({
//           id: item.id,
//           action: item.title,
//           timestamp: new Date(Date.now() - Math.random() * 1e10),
//           type: ['create', 'update', 'delete'][Math.floor(Math.random() * 3)]
//         }));
//         this.applyFilter();
//       },
//       error: (err) => {
//         console.error('Error fetching logs:', err);
//       }
//     });
//   }

//   applyFilter() {
//     const term = this.search.toLowerCase();
//     this.filteredLogs = this.logs.filter(log => {
//       const actionMatch = log.action.toLowerCase().includes(term);
//       const logDate = new Date(log.timestamp);
//       const fromMatch = this.fromDate ? logDate >= this.fromDate : true;
//       const toMatch = this.toDate ? logDate <= this.toDate : true;
//       return actionMatch && fromMatch && toMatch;
//     });
//     this.totalPages = Math.ceil(this.filteredLogs.length / this.pageSize);
//     this.page = 1;
//   }

//   get paginatedLogs() {
//     const start = (this.page - 1) * this.pageSize;
//     return this.filteredLogs.slice(start, start + this.pageSize);
//   }

//   exportToCSV() {
//     const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.filteredLogs);
//     const wb: XLSX.WorkBook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Logs');
//     const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
//     const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
//     FileSaver.saveAs(blob, 'ActivityLogs.xlsx');
//   }

//   goToPage(p: number) {
//     if (p >= 1 && p <= this.totalPages) {
//       this.page = p;
//     }
//   }

//   getPageNumbers(): number[] {
//     const half = Math.floor(this.maxVisiblePages / 2);
//     let start = Math.max(1, this.page - half);
//     let end = Math.min(this.totalPages, start + this.maxVisiblePages - 1);

//     if (end - start + 1 < this.maxVisiblePages) {
//       start = Math.max(1, end - this.maxVisiblePages + 1);
//     }

//     const pages = [];
//     for (let i = start; i <= end; i++) {
//       pages.push(i);
//     }
//     return pages;
//   }

//   hasLeftEllipsis(): boolean {
//     return this.page > Math.floor(this.maxVisiblePages / 2) + 1;
//   }

//   hasRightEllipsis(): boolean {
//     return this.page + Math.floor(this.maxVisiblePages / 2) < this.totalPages;
//   }

//   getLogClass(log: any): string {
//     if (!log?.type) return '';
//     const type = log.type.toLowerCase();
//     switch (type) {
//       case 'create':
//         return 'bg-green-100 text-green-800';
//       case 'update':
//         return 'bg-yellow-100 text-yellow-800';
//       case 'delete':
//         return 'bg-red-100 text-red-800';
//       default:
//         return '';
//     }
//   }

//   getLogIcon(log: any): string {
//     const type = log?.type?.toLowerCase();
//     switch (type) {
//       case 'create':
//         return 'add_circle';
//       case 'update':
//         return 'edit';
//       case 'delete':
//         return 'delete';
//       default:
//         return 'info';
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-activity-log',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, MatButtonModule],
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.css']
})
export class ActivityLogComponent implements OnInit {
  logs: any[] = [];
  filteredLogs: any[] = [];
  search: string = '';
  fromDate?: Date;
  toDate?: Date;
  page: number = 1;
  pageSize: number = 5;
  totalPages: number = 0;
  maxVisiblePages: number = 5;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchLogs();
  }

  fetchLogs() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe({
      next: (data) => {
        this.logs = data.map(item => ({
          id: item.id,
          action: item.title,
          timestamp: new Date(Date.now() - Math.random() * 1e10),
          type: ['create', 'update', 'delete'][Math.floor(Math.random() * 3)]
        }));
        this.applyFilter();
      },
      error: (err) => {
        console.error('Error fetching logs:', err);
      }
    });
  }

  applyFilter() {
    const term = this.search.toLowerCase();
    this.filteredLogs = this.logs.filter(log => {
      const actionMatch = log.action.toLowerCase().includes(term);
      const logDate = new Date(log.timestamp);
      const fromMatch = this.fromDate ? logDate >= this.fromDate : true;
      const toMatch = this.toDate ? logDate <= this.toDate : true;
      return actionMatch && fromMatch && toMatch;
    });
    this.totalPages = Math.ceil(this.filteredLogs.length / this.pageSize);
    this.page = 1;
  }

  get paginatedLogs() {
    const start = (this.page - 1) * this.pageSize;
    return this.filteredLogs.slice(start, start + this.pageSize);
  }

  exportToCSV() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.filteredLogs);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Logs');
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    FileSaver.saveAs(blob, 'ActivityLogs.xlsx');
  }

  goToPage(p: number) {
    if (p >= 1 && p <= this.totalPages) {
      this.page = p;
    }
  }

  getPageNumbers(): number[] {
    const half = Math.floor(this.maxVisiblePages / 2);
    let start = Math.max(1, this.page - half);
    let end = Math.min(this.totalPages, start + this.maxVisiblePages - 1);

    if (end - start + 1 < this.maxVisiblePages) {
      start = Math.max(1, end - this.maxVisiblePages + 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

  hasLeftEllipsis(): boolean {
    return this.page > Math.floor(this.maxVisiblePages / 2) + 1;
  }

  hasRightEllipsis(): boolean {
    return this.page + Math.floor(this.maxVisiblePages / 2) < this.totalPages;
  }

  getLogClass(log: any): string {
    if (!log?.type) return '';
    const type = log.type.toLowerCase();
    switch (type) {
      case 'create':
        return 'log-create';
      case 'update':
        return 'log-update';
      case 'delete':
        return 'log-delete';
      default:
        return '';
    }
  }

  getLogIcon(log: any): string {
    const type = log?.type?.toLowerCase();
    switch (type) {
      case 'create':
        return 'add_circle';
      case 'update':
        return 'edit';
      case 'delete':
        return 'delete';
      default:
        return 'info';
    }
  }

  editLog(log: any) {
    // Implement edit functionality here
    console.log('Edit log:', log);
  }

  deleteLog(log: any) {
    // Implement delete functionality here
    console.log('Delete log:', log);
  }
}
