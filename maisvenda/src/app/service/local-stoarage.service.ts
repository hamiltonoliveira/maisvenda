import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoarageService {

  private storage: Storage;
  localStorage: any;

  constructor() {
    this.storage = window.localStorage;
  }

   set(key: string, value: any): boolean {
    if (this.storage) {
      this.storage.setItem(key,value);
      return true;
    }
    return false;
  }

  get(key: string): any {
    if (this.storage) {
      return JSON.parse(this.localStorage.getItem(key));
    }
    return null;
  }

  remove(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);
      return true;
    }
    return false;
  }

  clear(): boolean {
    if (this.storage) {
      this.storage.clear();
      return true;
    }
    return false;
  }

}
