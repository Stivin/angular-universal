import { Injectable } from '@angular/core';

// import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class BrowserStorage implements Storage {
  [index: number]: string;
  [key: string]: any;
  length: number;

  // constructor(private _cookieService: CookieService) {
  // }

  public clear(): void {
    // this._cookieService.deleteAll();
  }

  public getItem(key: string): string {
    // return this._cookieService.get(key);
    return 'test get item';
  }

  public key(index: number): string {
    // return this._cookieService.getAll().propertyIsEnumerable[index];
    return 'test key';
  }

  public removeItem(key: string): void {
    // this._cookieService.delete(key);
  }

  public setItem(key: string, data: string): void {
    // this._cookieService.set(key, data);
  }
}
