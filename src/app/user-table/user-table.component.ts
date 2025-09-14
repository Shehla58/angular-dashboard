

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {
  searchTerm: string = '';
  currentPage: number = 1;
  rowsPerPage: number = 5;

  users = [
    { id: 1, name: 'Ali', email: 'ali@example.com' },
    { id: 2, name: 'Aisha', email: 'aisha@example.com' },
    { id: 3, name: 'Ahmed', email: 'ahmed@example.com' },
    { id: 4, name: 'Sara', email: 'sara@example.com' },
    { id: 5, name: 'Umar', email: 'umar@example.com' },
    { id: 6, name: 'Zara', email: 'zara@example.com' },
    { id: 7, name: 'Bilal', email: 'bilal@example.com' },
    { id: 8, name: 'Fatima', email: 'fatima@example.com' },
    { id: 9, name: 'Usman', email: 'usman@example.com' },
    { id: 10, name: 'Hina', email: 'hina@example.com' }
  ];

  get filteredUsers() {
    const filtered = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    const start = (this.currentPage - 1) * this.rowsPerPage;
    return filtered.slice(start, start + this.rowsPerPage);
  }

  get totalPages() {
    return Math.ceil(
      this.users.filter(user =>
        user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      ).length / this.rowsPerPage
    );
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }
}
