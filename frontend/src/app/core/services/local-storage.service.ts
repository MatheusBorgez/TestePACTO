import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  setItem(key: string, value: string): void {

    if (typeof window === 'undefined') {
      return;
    }

    localStorage.setItem(key, value);
  }

  getItem(key: string): string {

    if (typeof window === 'undefined') {
      return '';
    }

    return localStorage.getItem(key) ?? '';
  }

  removeItem(key: string): void {

    if (typeof window === 'undefined') {
      return;
    }

    localStorage.removeItem(key);
  }
}
