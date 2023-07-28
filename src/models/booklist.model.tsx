import { Book } from "./book.model";

export enum BookListType {
    Podium = 1,
    List = 2,
}

export interface BestSellersBookList {
    books: Book[]
    bestsellers_date: Date
    display_name: string
    list_name: string
    published_date: Date
}

export interface BookList {
    books: Book[]
}