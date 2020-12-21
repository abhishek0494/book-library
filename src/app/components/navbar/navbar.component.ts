import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {FilterByString,GetBooks} from './../../store/action'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchForm= new FormGroup({
    searchTerm: new FormControl(''),
  });
  constructor(private store: Store<{books:[]}>) { }

  ngOnInit(): void {
  }
  removeFilter():void{
    this.searchForm.controls['searchTerm'].setValue('')
    this.store.dispatch(new GetBooks())
  }
  newSearch():void{
    console.log(this.searchForm.controls['searchTerm']['value'])
    this.store.dispatch(new FilterByString(this.searchForm.controls['searchTerm']['value']))
  }
}
