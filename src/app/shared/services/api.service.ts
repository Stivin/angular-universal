import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TransferHttpService } from './transfer-http.service';

interface IParams {
  [key: string]: any;
}

@Injectable()
export class ApiService {
  constructor(private _httpClient: HttpClient,
              private _transferHttp: TransferHttpService) {
  }

  /*
  * GET
  * */
  public get(url: string, params: IParams = null): Observable<any> {
    const httpParams: HttpParams = this._buildHttpParams(params);
    return this._transferHttp.get(url, { params: httpParams });
  }

  /*
  * POST
  * */
  public post(url: string, params: IParams): Observable<any> {
    return this._transferHttp.post(url, params);
  }

  /*
  * PUT
  * */
  public put(url: string, params: IParams): Observable<any> {
    return this._transferHttp.put(url, params);
  }

  /*
  * DELETE
  * */
  public delete(url: string, params: IParams): Observable<any> {
    return this._httpClient.delete(url, params);
  }

  /*
  * File
  * */
  public file(url: string, params: IParams): Observable<any> {
    const httpParams: HttpParams = this._buildHttpParams(params);
    return this._httpClient.get(url, { responseType: 'blob', params: httpParams });
  }

  private _buildHttpParams(params: IParams): HttpParams {
    let httpParams: HttpParams = new HttpParams();
    for (const key in params) {
      httpParams = httpParams.set(key, params[key]);
    }
    return httpParams;
  }
}
