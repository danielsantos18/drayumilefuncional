// src/app/core/services/theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private key = 'drayumile-theme';

  constructor() {
    const stored = localStorage.getItem(this.key);
    if (stored === 'dark') document.documentElement.classList.add('dark');
  }

  toggle() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem(this.key, isDark ? 'dark' : 'light');
  }

  setDark(dark: boolean) {
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem(this.key, dark ? 'dark' : 'light');
  }

  isDark() {
    return document.documentElement.classList.contains('dark');
  }
}
