import { CardType, RankCardType } from "@/models/card.model"
import {
    BookActions,
    BookAuthor,
    BookDescription,
    BookImg,
    BookTitle,
    BronzeCardContainer,
    BronzeImportantLabel,
    BronzeRankBackground,
    CardContainer,
    GoldCardContainer,
    GoldImportantLabel,
    GoldRankBackground,
    ImportantLabel,
    LabelActions,
    PortraitImg,
    RankBackground,
    RankNumber,
    SilverCardContainer,
    SilverImportantLabel,
    SilverRankBackground
} from "./card.podium.style"
import { getMenuOptionsByBuyLinks, getWeeksListMessage } from "@/helpers/card.helper";
import { Book } from "@/models/book.model";
import { Label } from "@/components/labels/label";
import { RankStatus } from "@/components/status/rank.status";
import { Menu } from "@/components/menus/menu";

const DEFAULT_CARD: CardType = {
    CardContainerType: CardContainer,
    RankBackgroundType: RankBackground,
    ImportantLabelType: ImportantLabel,
}

const GOLD_CARD: CardType = {
    CardContainerType: GoldCardContainer,
    RankBackgroundType: GoldRankBackground,
    ImportantLabelType: GoldImportantLabel,
}

const SILVER_CARD: CardType = {
    CardContainerType: SilverCardContainer,
    RankBackgroundType: SilverRankBackground,
    ImportantLabelType: SilverImportantLabel,
}

const BRONZE_CARD: CardType = {
    CardContainerType: BronzeCardContainer,
    RankBackgroundType: BronzeRankBackground,
    ImportantLabelType: BronzeImportantLabel,
}

const RANK_CARD_TYPES = {
    [RankCardType.Gold]: GOLD_CARD,
    [RankCardType.Silver]: SILVER_CARD,
    [RankCardType.Bronze]: BRONZE_CARD,
}

export const PodiumCard = ({ rank, book_image, title, author, description, rank_last_week, weeks_on_list, buy_links, book_review_link }: Book) => {
    const getTypeCard = (): CardType => RANK_CARD_TYPES[rank as RankCardType] ?? DEFAULT_CARD

    const { CardContainerType, RankBackgroundType, ImportantLabelType } = getTypeCard();

    return (
        <CardContainerType>
            <RankBackgroundType>
                <RankNumber>{rank}</RankNumber>
            </RankBackgroundType>

            <RankStatus rank={rank} rank_last_week={rank_last_week}/>

            <PortraitImg>
                <BookImg src={book_image} alt="book-image" />
            </PortraitImg>

            <ImportantLabelType>
                <BookTitle>{title}</BookTitle>
                <BookAuthor>by {author}</BookAuthor>
            </ImportantLabelType>

            <BookDescription>
                {description}
            </BookDescription>

            <BookActions>
                <LabelActions>
                    {book_review_link && <Label backgroundColor="#55A6D9"><a href={book_review_link} target="_blank">Read Review</a></Label>}
                    {buy_links && <Label backgroundColor="#234459"><Menu title="Buy" options={getMenuOptionsByBuyLinks(buy_links)}/></Label>}
                    <Label backgroundColor="#F07B22">{getWeeksListMessage(weeks_on_list)}</Label>
                </LabelActions>
            </BookActions>
        </CardContainerType>
    )
}