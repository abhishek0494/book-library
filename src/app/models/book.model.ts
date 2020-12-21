export class Book {
    title: string='';
    publishedDate: object={};
    thumbnailUrl?: string='';
    authors: Array<string>=[];
    categories:Array<string>=[];
    isbn:string='';
    pageCount: number=0;
    shortDescription:string='';
    longDescription?:string='';
    status?:string='';
    count:number
  }