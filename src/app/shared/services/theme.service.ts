import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkTheme = false;

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.setDarkTheme(true);
    }
  }

  isDarkMode(): boolean {
    return this.darkTheme;
  }

  toggleTheme() {
    this.setDarkTheme(!this.darkTheme);
  }

  setDarkTheme(enable: boolean) {
    this.darkTheme = enable;
    document.body.classList.toggle('dark-theme', enable);
    localStorage.setItem('theme', enable ? 'dark' : 'light');
  }
}
