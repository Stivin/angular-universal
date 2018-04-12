import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {
  public blogList$: Observable<any[]>;

  ngOnInit(): void {
    this.blogList$ = this._buildBlogList();
  }

  private _buildBlogList(): Observable<any[]> {
    const blogList: any[] = [];
    for (let i: number = 0; i < 20; i++) {
      blogList.push({
        title: `Title #${i}`,
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.'
      });
    }
    return Observable.of(blogList);
  }
}
