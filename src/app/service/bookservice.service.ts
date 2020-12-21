import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get('http://localhost:4000/books');
  }
  getAllCategories(){
    return this.http.get('http://localhost:4000/books/categories')
  }
  searchByCategory(category){
    return this.http.get(`http://localhost:4000/books/categories/${category}`)
  }
  searchBook(searchTerm){
    return this.http.get(`http://localhost:4000/books/search/${searchTerm}`)
  }
  addBook(bookObj){
    return this.http.post(`http://localhost:4000/addbook`,bookObj)
  }
  removeBook(id){
    return this.http.post(`http://localhost:4000/remove/book/${id}`,{})
  }
}