import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SharedTransferHttpService } from '../shared/shared-transfer-http/shared-transfer-http.service';

@Component({
  templateUrl: './back.component.html'
})
export class BackComponent implements OnInit {
  public data: any;
  public dataDelay: any;

  constructor(private _http: HttpClient,
              private _transferHttp: SharedTransferHttpService) {
  }

  ngOnInit(): void {
    this._getData();
    this._getDelayData();
  }

  private _getData(): void {
    const params = {
      name: 'morpheus',
      job: 'leader'
    };
    this._http.post('https://reqres.in/api/users', params).subscribe(res => this.data = res);
  }

  private _getDelayData(): void {
    this._transferHttp.get('https://reqres.in/api/users?delay=3').subscribe(res => this.dataDelay = res);
  }
}
