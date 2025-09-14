import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent {
  oldPassword = '';
  newPassword = '';

  changePassword() {
    // TODO: Replace with real API call
    console.log(`Changing password from ${this.oldPassword} to ${this.newPassword}`);
    alert('Password changed!');
  }
}
