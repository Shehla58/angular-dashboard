import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // ✅ This makes it a standalone service
})
export class ThemeService {
  private darkMode = false;

  isDarkMode(): boolean {
    return this.darkMode;
  }

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}
