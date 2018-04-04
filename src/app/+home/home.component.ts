import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public result: any;

  constructor(private _http: HttpClient) {
  }

  ngOnInit(): void {
    this._http.get('https://api-adresse.data.gouv.fr/search/?q=seclin').subscribe(res => this.result = res);
  }
}
