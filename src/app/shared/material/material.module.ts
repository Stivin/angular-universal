import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatTooltipModule,
  MatDialogModule,
  MatListModule,
  MatCardModule,
  MatGridListModule,
  MatTabsModule,
  MatTableModule,
  MatExpansionModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatProgressBarModule,
  MatPaginatorModule, MatPaginatorIntl,
  MatSortModule,
} from '@angular/material';

import { CustomMatPaginatorService } from './custom-mat-paginator.service';

@NgModule({
  exports: [
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    MatTableModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: CustomMatPaginatorService }]
})
export class MaterialModule {
}
