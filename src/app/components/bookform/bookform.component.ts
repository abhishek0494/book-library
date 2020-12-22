import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {AddNewBook} from './../../store/action'
@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.scss']
})
export class BookformComponent implements OnInit {
  bookForm= new FormGroup({
    bookname: new FormControl('',Validators.required),
    author: new FormControl('',Validators.required),
    category: new FormControl('',Validators.required),
    copies: new FormControl(0,[Validators.required,Validators.min(1),Validators.max(100)]),
    bookdescription: new FormControl('',Validators.required)
  });;
  onReset(): void {
    this.bookForm.setValue({bookname: '', author: '',copies:0,bookdescription:'',category:'' });
  }
  onFormSubmit():void{
    let bookObj={
      title: this.bookForm.controls['bookname'].value,
    publishedDate:new Date(),
    thumbnailUrl:"",
    authors:this.bookForm.controls['author'].value.split(','),
    categories:this.bookForm.controls['category'].value.split(','),
    isbn:new Date().getTime().toString(),
    pageCount:Math.floor((Math.random()*1000)+400),
    shortDescription:this.bookForm.controls['bookdescription'].value,
    longDescription:this.bookForm.controls['bookdescription'].value,
    status:"Active",
    count:this.bookForm.controls['copies'].value
    }
    this.store.dispatch(new AddNewBook(bookObj))
    this.onReset()
  }
  constructor(private store: Store<{books:[]}>) { }

  ngOnInit(): void {
  }

}
