import { Component, OnInit } from '@angular/core';

import { StatusService } from '../../../services/status.service';

@Component({
  selector: 'app-wrapper-not-found',
  templateUrl: './wrapper-not-found.component.html'
})
export class WrapperNotFoundComponent implements OnInit {

  constructor(private _statusService: StatusService) {
  }

  ngOnInit(): void {
    this._statusService.setStatus(404, 'Not Found');
  }
}
