import { Component, OnInit } from '@angular/core';

import { ApiService } from '../shared/services/api.service';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public result: any;

  constructor(private _apiService: ApiService) {
  }

  ngOnInit(): void {
    this._apiService.get('https://api-adresse.data.gouv.fr/search/?q=seclin').subscribe(res => this.result = res);
  }
}
