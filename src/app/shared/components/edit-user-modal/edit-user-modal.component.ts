import { Component, Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-user-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './edit-user-modal.component.html'
})
export class EditUserModalComponent {
  name: string;
  email: string;

  constructor(
    public dialogRef: MatDialogRef<EditUserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string; email: string }
  ) {
    this.name = data.name;
    this.email = data.email;
  }

  save(): void {
    this.dialogRef.close({ name: this.name, email: this.email });
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
