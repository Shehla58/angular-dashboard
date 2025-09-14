
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService, UserProfile } from '../profile.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatSnackBarModule,
    MatIconModule,
    HttpClientModule
  ],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: UserProfile = {
    name: '',
    email: '',
    phone: '',
    image: '',
    facebook: '',
    linkedin: ''
  };

  isEdit = false;
  loading = false;

  constructor(private profileService: ProfileService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.loading = true;
    this.profileService.getUserProfile().subscribe({
      next: (res) => {
        this.user = res;
        this.loading = false;
      },
      error: () => {
        this.snackBar.open('Failed to load profile!', 'Close', { duration: 3000 });
        this.loading = false;
      }
    });
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  saveChanges() {
    this.profileService.updateUserProfile(this.user).subscribe({
      next: () => {
        this.snackBar.open('Profile updated via API!', 'Close', { duration: 3000 });
        this.isEdit = false;
      },
      error: () => {
        this.snackBar.open('Update failed!', 'Close', { duration: 3000 });
      }
    });
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.user.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}

