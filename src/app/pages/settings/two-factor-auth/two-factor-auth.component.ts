// @Component({
//   selector: 'app-two-factor-auth',
//   standalone: true,
//   imports: [CommonModule, MatButtonModule],
//   template: `
//     <h3>🔒 Two-Factor Authentication</h3>
//     <button mat-raised-button (click)="toggle2FA()">
//       {{ is2FAEnabled ? 'Disable 2FA' : 'Enable 2FA' }}
//     </button>
//   `
// })
// export class TwoFactorAuthComponent {
//   is2FAEnabled = false;

//   toggle2FA() {
//     this.is2FAEnabled = !this.is2FAEnabled;
//     // Save preference via service or API
//     alert(this.is2FAEnabled ? '2FA Enabled' : '2FA Disabled');
//   }
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-two-factor-auth',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <h3>🔒 Two-Factor Authentication</h3>
    <button mat-raised-button (click)="toggle2FA()">
      {{ is2FAEnabled ? 'Disable 2FA' : 'Enable 2FA' }}
    </button>
  `
})
export class TwoFactorAuthComponent {
  is2FAEnabled = false;

  toggle2FA() {
    this.is2FAEnabled = !this.is2FAEnabled;
    // Save preference via service or API
    alert(this.is2FAEnabled ? '2FA Enabled' : '2FA Disabled');
  }
}
