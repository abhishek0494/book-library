import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import {UpdateBookDetail,CancelEdit} from './../../store/action'
@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.scss']
})
export class EditbookComponent implements OnInit {
  bookForm:any;
  bookToEdit:any;
  constructor(private store: Store<{books:[]}>) {
    this.store.pipe(select('books')).subscribe(data => {
      this.bookToEdit=data['bookToEdit']
    });
   }
  onReset(): void {
    this.bookForm.setValue({
      bookname: this.bookToEdit.title, 
      author: this.bookToEdit.authors.join(','),
      copies:this.bookToEdit.count,
      bookdescription:this.bookToEdit.shortDescription?this.bookToEdit.shortDescription:'',
      category:this.bookToEdit.categories?this.bookToEdit.categories.join(','):''
    });
  }
  onFormSubmit():void{
    let bookObj={
      title: this.bookForm.controls['bookname'].value,
    publishedDate:this.bookToEdit.publishedDate?this.bookToEdit.publishedDate:new Date(),
    thumbnailUrl:this.bookToEdit.thumbnailUrl?this.bookToEdit.thumbnailUrl:"",
    authors:this.bookForm.controls['author'].value.split(','),
    categories:this.bookForm.controls['category'].value.split(','),
    isbn:this.bookToEdit.isbn?this.bookToEdit.isbn:new Date().getTime().toString(),
    pageCount:this.bookToEdit.pageCount?this.bookToEdit.pageCount:Math.floor((Math.random()*1000)+400),
    shortDescription:this.bookForm.controls['bookdescription'].value,
    longDescription:this.bookForm.controls['bookdescription'].value,
    status:this.bookToEdit.status?this.bookToEdit.status:"Active",
    count:this.bookForm.controls['copies'].value
    }
    this.store.dispatch(new UpdateBookDetail(bookObj))
    this.onReset()
  }
  cancelEdit(){
    this.store.dispatch(new CancelEdit())
  }
  ngOnInit(): void {
    this.bookForm= new FormGroup({
      bookname: new FormControl('',Validators.required),
      author: new FormControl('',Validators.required),
      category: new FormControl('',Validators.required),
      copies: new FormControl(0,[Validators.required,Validators.min(0),Validators.max(100)]),
      bookdescription: new FormControl('',Validators.required)
    });
    this.onReset()
  }

}
