import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from './action';
import { BooksService } from './../service/bookservice.service';

@Injectable()
export class bookEffects {
  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType(ActionTypes.LoadItems),
    mergeMap(() =>
      this.booksService.getAll().pipe(
        map(books => {
            console.log(books)
          return { type: ActionTypes.LoadSuccess, payload: books };
        }),
        catchError(() => EMPTY)
      )
    )
  );
  @Effect()
  loadCategories$ = this.actions$.pipe(
    ofType(ActionTypes.getAllCategory),
    mergeMap(() =>
      this.booksService.getAllCategories().pipe(
        map(categories => {
            console.log(categories)
          return { type: ActionTypes.GetSuccess, payload: categories['categories'] };
        }),
        catchError(() => EMPTY)
      )
    )
  );
  @Effect()
  searchByCategories$ = this.actions$.pipe(
    ofType(ActionTypes.searchByCategory),
    mergeMap((category) =>
      this.booksService.searchByCategory(category['searchTerm']).pipe(
        map(books => {
            console.log(books)
          return { type: ActionTypes.CategorySearchSuccess, payload: books };
        }),
        catchError(() => EMPTY)
      )
    )
  );
  @Effect()
  searchByTerm$ = this.actions$.pipe(
    ofType(ActionTypes.searchByString),
    mergeMap((category) =>
      this.booksService.searchBook(category['searchTerm']).pipe(
        map(books => {
            console.log(books)
          return { type: ActionTypes.searchByStringSuccess, payload: books };
        }),
        catchError(() => EMPTY)
      )
    )
  )
  @Effect()
  addNewBook$ = this.actions$.pipe(
    ofType(ActionTypes.Add),
    mergeMap((category) =>
      this.booksService.addBook(category).pipe(
        map(books => {
            console.log(books)
          return { type: ActionTypes.AddSuccess, payload: books };
        }),
        catchError(() => EMPTY)
      )
    )
  );
  @Effect()
  removeBook$ = this.actions$.pipe(
    ofType(ActionTypes.Remove),
    mergeMap((category) =>
      this.booksService.removeBook(category['id']).pipe(
        map(books => {
            console.log(books)
          return { type: ActionTypes.RemoveSuccess, payload: books };
        }),
        catchError(() => EMPTY)
      )
    )
  )
  @Effect()
  updateBook$ = this.actions$.pipe(
    ofType(ActionTypes.Update),
    mergeMap((category) =>
      this.booksService.updateBook(category).pipe(
        map(books => {
          return { type: ActionTypes.UpdateSuccess, payload: books };
        }),
        catchError(() => EMPTY)
      )
    )
  );
  constructor(
    private actions$: Actions,
    private booksService: BooksService
  ) {}
}