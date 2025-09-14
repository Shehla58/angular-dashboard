import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class ToastService {
  constructor(private snackBar: MatSnackBar) {}

  success(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['custom-snackbar-success'],
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    });
  }

  error(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['custom-snackbar-error'],
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    });
  }
}
