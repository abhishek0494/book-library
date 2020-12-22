import { Component, OnInit } from '@angular/core';
import { select,Store } from '@ngrx/store';
import {Book} from './../../models/book.model'
import {GetBooks,RemoveBooks,EditBook} from './../../store/action'
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books:Book[]=[]
  defaultUrl:string='assets/book.jpg'
  constructor(private store: Store<{books:[]}>) {
    store.pipe(select('books')).subscribe(data => {
      this.books=data['book']
    });
   }
   transformString(desc:any):string{
     if(!desc){
       return 'No Description available for this book.'
     }
    if(desc && desc.length>140){
      return desc.substr(0,140)+'...'
    }else{
      return desc
    }
   }
   removeBook(id){
     this.store.dispatch(new RemoveBooks(id))
   }
   editBook(book){
    this.store.dispatch(new EditBook(book))   
  }
  ngOnInit(): void {
    this.store.dispatch(new GetBooks());
  }

}
