import { Component, OnInit } from '@angular/core';
import { select,Store } from '@ngrx/store';
import { interval } from 'rxjs';
import { timeout } from 'rxjs/operators';
import {Book} from './../../models/book.model'
import {GetCategories,FilterByCategory,GetBooks} from './../../store/action'
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories:Array<string>=[]
  selected:string='';
  showCategories:boolean=false;
  constructor(private store: Store<{books:[]}>) { 
    store.pipe(select('books')).subscribe(data => {
      this.categories=data['categories'];
      // if(this.categories && this.categories['categories'])
        console.log(this.categories['categories'])
    });
  }
  removeFilter(){
    this.selected='';
    this.store.dispatch(new GetBooks())
  }
  selectCategory(element){
    this.selected=element
    console.log(this.selected)
    this.store.dispatch(new FilterByCategory(this.selected))
  }
  toggleCategory(){
    if(this.categories.length==0){
      this.store.dispatch(new GetCategories());
      this.showCategories=!this.showCategories
    }else{
      this.showCategories=!this.showCategories

    }
  }
  ngOnInit(): void {
    
  }

}
