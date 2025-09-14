import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveSettingsService {
  saveSettings(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  loadSettings(key: string): any {
    return JSON.parse(localStorage.getItem(key) || 'null');
  }
}
