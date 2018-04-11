import { Component, OnInit } from '@angular/core';

import { ApiService } from '../shared/services/api.service';

@Component({
  templateUrl: './back.component.html'
})
export class BackComponent implements OnInit {
  public data: any;
  public dataDelay: any;

  constructor(private _apiService: ApiService) {
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
    this._apiService.post('https://reqres.in/api/users', params).subscribe(res => this.data = res);
  }

  private _getDelayData(): void {
    const params = { delay: 3 };
    this._apiService.getClient('https://reqres.in/api/users', params).subscribe(res => this.dataDelay = res);
  }
}
