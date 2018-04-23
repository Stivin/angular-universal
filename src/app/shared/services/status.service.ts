import { Inject, Injectable, Optional } from '@angular/core';
import { RESPONSE } from '@nguniversal/express-engine/tokens';

@Injectable()
export class StatusService {
  constructor(@Optional() @Inject(RESPONSE) private _response: any) {
  }

  public setStatus(code: number, message: string): void {
    if (this._response) {
      this._response.statusCode = code;
      this._response.statusMessage = message;
    }
  }
}
