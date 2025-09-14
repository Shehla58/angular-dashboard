// @Component({
//   selector: 'app-language-selector',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   template: `
//     <h3>🌐 Language</h3>
//     <select [(ngModel)]="selectedLanguage" (change)="onLanguageChange()">
//       <option *ngFor="let lang of languages" [value]="lang.code">{{ lang.label }}</option>
//     </select>
//   `
// })
// export class LanguageSelectorComponent {
//   languages = [
//     { code: 'en', label: 'English' },
//     { code: 'ur', label: 'Urdu' },
//     { code: 'es', label: 'Spanish' }
//   ];

//   selectedLanguage = 'en';

//   onLanguageChange() {
//     alert(`Language changed to ${this.selectedLanguage}`);
//     // Optionally: use ngx-translate or i18n strategy
//   }
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Required for ngModel

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h3>🌐 Language</h3>
    <select [(ngModel)]="selectedLanguage" (change)="onLanguageChange()">
      <option *ngFor="let lang of languages" [value]="lang.code">{{ lang.label }}</option>
    </select>
  `
})
export class LanguageSelectorComponent {
  languages = [
    { code: 'en', label: 'English' },
    { code: 'ur', label: 'Urdu' },
    { code: 'es', label: 'Spanish' }
  ];

  selectedLanguage = 'en';

  onLanguageChange() {
    alert(`Language changed to ${this.selectedLanguage}`);
    // Optionally: Use ngx-translate or built-in Angular i18n
  }
}
