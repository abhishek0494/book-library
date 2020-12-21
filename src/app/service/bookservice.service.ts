import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get('/books');
  }
  getAllCategories(){
    return this.http.get('/books/categories')
  }
  searchByCategory(category){
    return this.http.get(`/books/categories/${category}`)
  }
  searchBook(searchTerm){
    return this.http.get(`/books/search/${searchTerm}`)
  }
  addBook(bookObj){
    return this.http.post(`/addbook`,bookObj)
  }
  removeBook(id){
    return this.http.post(`/remove/book/${id}`,{})
  }
}