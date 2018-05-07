import { Injectable } from '@angular/core';

const VERSION: string = '6.0.0';
const YEAR: number = 2018;

@Injectable()
export class GlobalService {
  get version(): string {
    return VERSION;
  }

  get year(): number {
    return YEAR;
  }
}
