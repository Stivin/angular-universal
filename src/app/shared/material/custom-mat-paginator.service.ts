import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material';

@Injectable()
export class CustomMatPaginatorService extends MatPaginatorIntl {
  public itemsPerPageLabel: string = 'Количество на страницу';
  public nextPageLabel: string = 'Следующая';
  public previousPageLabel: string = 'Предыдущая';
  public ofLabel: string = 'из';

  public getRangeLabel = (page: number, pageSize: number, length: number): string => {
    if (length === 0 || pageSize === 0) {
      return `0 ${this.ofLabel} ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex: number = page * pageSize;
    const endIndex: number = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} ${this.ofLabel} ${length}`;
  }
}
