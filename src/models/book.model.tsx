import { BookListType } from "./booklist.model"

export interface BuyLink {
    name: string
    url: string
}

export interface Book {
    buy_links: BuyLink[]
    author: string
    book_image: string
    book_review_link?: string
    description: string
    rank: number
    rank_last_week: number
    title: string
    weeks_on_list: number
    book_list_type: BookListType
}