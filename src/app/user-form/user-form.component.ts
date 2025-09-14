import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>{{ data ? 'Edit User' : 'Add User' }}</h2>
    <form (ngSubmit)="save()">
      <mat-form-field appearance="fill" class="w-full">
        <mat-label>Name</mat-label>
        <input matInput [(ngModel)]="user.name" name="name" required />
      </mat-form-field>

      <mat-form-field appearance="fill" class="w-full">
        <mat-label>Email</mat-label>
        <input matInput [(ngModel)]="user.email" name="email" required />
      </mat-form-field>

      <mat-form-field appearance="fill" class="w-full">
        <mat-label>Role</mat-label>
        <mat-select [(ngModel)]="user.role" name="role" required>
          <mat-option value="Admin">Admin</mat-option>
          <mat-option value="Editor">Editor</mat-option>
          <mat-option value="Viewer">Viewer</mat-option>
        </mat-select>
      </mat-form-field>

      <div class="text-right mt-4">
        <button mat-button type="button" (click)="dialogRef.close()">Cancel</button>
        <button mat-flat-button color="primary" type="submit">Save</button>
      </div>
    </form>
  `,
  styles: [`.w-full { width: 100%; } .text-right { text-align: right; }`]
})
export class UserFormComponent {
  user = { name: '', email: '', role: '' };

  constructor(
    public dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.user = { ...data };
    }
  }

  save() {
    this.dialogRef.close(this.user);
  }
}
