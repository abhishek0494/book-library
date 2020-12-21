import { Action } from '@ngrx/store';//action is an interface
import {Book} from './../models/book.model'
































export enum ActionTypes {
    Add = '[Book] Add new book',
    Remove = '[Book] Remove a book',
    LoadItems = '[Books] Load items from server',
    LoadSuccess = '[Books] Load success',
    getAllCategory = '[Books] load categories from server',
    GetSuccess = '[Books] get categories',
    searchByCategory = '[Books] filter by category',
    CategorySearchSuccess = "CategorySearchSuccess",
    searchByStringSuccess = "searchByStringSuccess",
    searchByString = "searchByString",
    AddSuccess = "AddSuccess",
    RemoveSuccess = "RemoveSuccess"
}

export class AddNewBook implements Action {
  readonly type = ActionTypes.Add;

  constructor(public payload: Book) {}
}
export class AddNewBookSuccess implements Action{
    readonly type = ActionTypes.AddSuccess;
    constructor(public payload: any) {}
    
}
export class GetBooks implements Action {
  readonly type = ActionTypes.LoadItems;
}
export class GetCategories implements Action {
    readonly type = ActionTypes.getAllCategory;
}
export class RemoveBooks implements Action {
  readonly type = ActionTypes.Remove;

  constructor(public id: string) {}
}
export class RemoveBooksSuccess implements Action{
    readonly type = ActionTypes.RemoveSuccess;
    constructor(public payload:any) {}
}
export class FilterByCategory implements Action {
    readonly type = ActionTypes.searchByCategory;
  
    constructor(public searchTerm: string) {}
  }
export class LoadItems implements Action {
  readonly type = ActionTypes.LoadSuccess;

  constructor(public payload: Book[]) {}
}
export class LoadCategories implements Action {
    readonly type = ActionTypes.GetSuccess;
  
    constructor(public payload= []) {}
  }
export class searchByCategorySuccess implements Action{
    readonly type = ActionTypes.CategorySearchSuccess;
    constructor(public payload: Book[]) {}
    
}
export class FilterByString implements Action {
    readonly type = ActionTypes.searchByString;
  
    constructor(public searchTerm: string) {}
  }
export class SearchByStringSuccess implements Action{
    readonly type = ActionTypes.searchByStringSuccess;
    constructor(public payload: Book[]) {}
    
}
export type ActionsUnion = AddNewBook | RemoveBooks | LoadItems | GetBooks |GetCategories |LoadCategories | FilterByCategory | searchByCategorySuccess | FilterByString | SearchByStringSuccess |AddNewBookSuccess | RemoveBooksSuccess;