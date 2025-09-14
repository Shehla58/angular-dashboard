import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TwoFactorAuthComponent } from '../settings/two-factor-auth/two-factor-auth.component'; // ✅ adjust path

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    TwoFactorAuthComponent  // ✅ added
  ],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  notificationsEnabled = true;
  language = 'en';
  darkMode = false;

  updateSettings() {
    alert('Settings updated!');
    // Optional: Send settings to API or save to localStorage/Firebase
  }
}
