import { Book } from "@/models/book.model";
import { BookList } from "@/models/booklist.model"
import { DefaultListContainer } from "./list.default.style";
import { DefaultCard } from "@/components/cards/default/card.default";

export const DefaultList = ({ books }: BookList) => {
    const sortedBooks = books.sort((bookA: Book, bookB: Book) => bookA.rank - bookB.rank).slice(0, 10);

    return (
        <DefaultListContainer>
            {sortedBooks.map( (book, index) => <DefaultCard {...book} key={`book-item-${index}`} />)}
        </DefaultListContainer>
    )
}