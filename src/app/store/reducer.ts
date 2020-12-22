import { ActionsUnion, ActionTypes } from './action';
import {Book} from './../models/book.model'
export const initialState ={ 
    book:[{
    title: '',
    publishedDate: {},
    thumbnailUrl: '',
    authors: [],
    categories:[],
    isbn:'',
    pageCount:0,
    shortDescription:'',
    longDescription:'',
    status:''
}],
categories:[],
bookToEdit:{},
isEditing:false
};

export function BookReducer(state = initialState, action: ActionsUnion) {
  console.log(action);
  switch (action.type) {
    case ActionTypes.LoadSuccess:
      return {
          ...state,
          book:[...action.payload],
          bookToEdit:{},
          isEditing:false
        }

    case ActionTypes.AddSuccess:
      return  {
          ...state,
          book:[...action.payload.book],
          categories:[...action.payload.categories]
        };
    case ActionTypes.Edit:
        return  {
            ...state,
            bookToEdit:action.payload,
            isEditing:true
        };
        case ActionTypes.Edit:
            return  {
                ...state,
                bookToEdit:{},
                isEditing:false
            };
    case ActionTypes.RemoveSuccess:
      return {
          ...state,
          book:[...action.payload.book],
          categories:[...action.payload.categories]
        }
      
    case ActionTypes.GetSuccess:
        return {
            ...state,
            categories:[...action.payload]
        }
    case ActionTypes.CategorySearchSuccess:
        return {
            ...state,
            book:[...action.payload],
        }
    case ActionTypes.searchByStringSuccess:
            return {
                ...state,
                book:[...action.payload],
        }
    case ActionTypes.UpdateSuccess:
        return {
            ...state,
            book:[...action.payload.book],
            categories:[...action.payload.categories],
            bookToEdit:{},
            isEditing:false
    }
    default:
      return state;
  }
}