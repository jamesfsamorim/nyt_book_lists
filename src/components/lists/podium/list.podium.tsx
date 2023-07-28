import { BookList } from "@/models/booklist.model";
import { PodiumListContainer } from "./list.podium.style";
import { Book } from "@/models/book.model";
import { PodiumCard } from "@/components/cards/podium/card.podium";

export const PodiumList = ({ books }: BookList) => {
    const [first, second, third, fourth, fifth] = books.sort((bookA: Book, bookB: Book) => bookA.rank - bookB.rank);

    return (
        <PodiumListContainer>
            <PodiumCard {...fourth} />
            <PodiumCard {...second} />
            <PodiumCard {...first} />
            <PodiumCard {...third} />
            <PodiumCard {...fifth} />
        </PodiumListContainer>
    )
}