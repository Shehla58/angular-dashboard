


// <!-- notifications.component.ts -->
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { MatCardModule } from '@angular/material/card';
// import { MatIconModule } from '@angular/material/icon';
// import { MatButtonModule } from '@angular/material/button';
// import { MatListModule } from '@angular/material/list';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { FormsModule } from '@angular/forms'; // ✅ Add this line
// @Component({
//   selector: 'app-notifications',
//   standalone: true,
//   imports: [
//     CommonModule,
//     FormsModule, // ✅ Add this here
//     MatCardModule,
//     MatIconModule,
//     MatButtonModule,
//     MatListModule
//   ],
//   templateUrl: './notifications.component.html',
//   styleUrls: ['./notifications.component.css']
// })
// export class NotificationsComponent {
//   notifications = [
//     { title: 'New User Registered', time: '2 mins ago', type: 'person' },
//     { title: 'System Backup Completed', time: '10 mins ago', type: 'backup' },
//     { title: 'Server Restart Scheduled', time: '30 mins ago', type: 'schedule' },
//     { title: 'New Comment on Post', time: '1 hour ago', type: 'comment' },
//     { title: 'Security Alert', time: '2 hours ago', type: 'security' }
//   ];

//   soundEnabled = true;

//   toggleSound(value: boolean) {
//     this.soundEnabled = value;
//     alert(this.soundEnabled ? '🔔 Sound Enabled' : '🔕 Sound Disabled');
//   }

//   clearNotifications() {
//     this.notifications = [];
//   }
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSlideToggleChange } from '@angular/material/slide-toggle'; // ✅ Import this

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSlideToggleModule
  ],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  notifications = [
    { title: 'New User Registered', time: '2 mins ago', type: 'person' },
    { title: 'System Backup Completed', time: '10 mins ago', type: 'backup' },
    { title: 'Server Restart Scheduled', time: '30 mins ago', type: 'schedule' },
    { title: 'New Comment on Post', time: '1 hour ago', type: 'comment' },
    { title: 'Security Alert', time: '2 hours ago', type: 'security' }
  ];

  soundEnabled = true;

  toggleSound(event: MatSlideToggleChange) {
    this.soundEnabled = event.checked;
    alert(this.soundEnabled ? '🔔 Sound Enabled' : '🔕 Sound Disabled');
  }

  clearNotifications() {
    this.notifications = [];
  }
}
