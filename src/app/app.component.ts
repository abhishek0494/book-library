import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book-library';
  isEditing:boolean=false
  constructor(private store: Store<{books:[]}>) {
    this.store.pipe(select('books')).subscribe(data => {
      this.isEditing=data['isEditing']
    });
   }
}
