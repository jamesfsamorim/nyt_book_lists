import { ListActions, ListButtonAction, ListHeader, ListTitle } from "./list.style"
import ListIcon from '@mui/icons-material/List';
import BarChartIcon from '@mui/icons-material/BarChart';
import { BestSellersBookList, BookListType } from "@/models/booklist.model";
import { useState } from "react";
import { PodiumList } from "./podium/list.podium";
import { DefaultList } from "./default/list.default";
import { ScaleAnimationContainer, ScaleLeftAnimationContainer } from "@/app/animation.style";

export const List = ({ books, list_name }: BestSellersBookList) => {
    const [listType, setListType] = useState(BookListType.Podium);

    const changeListType = (type: BookListType) => setListType(type);

    return (
        <div>
            <ListHeader>
                <ListTitle>{list_name}</ListTitle>

                <ListActions>
                    <ListButtonAction
                        onClick={() => changeListType(BookListType.Podium)}
                        className={listType === BookListType.Podium ? 'active' : ''}
                    >
                        <BarChartIcon />
                    </ListButtonAction>

                    <ListButtonAction
                        onClick={() => changeListType(BookListType.List)}
                        className={listType ===  BookListType.List ? 'active' : ''}
                    >
                        <ListIcon />
                    </ListButtonAction>
                </ListActions>

            </ListHeader>

            {listType === BookListType.Podium 
                ? <ScaleAnimationContainer isEntering={listType === BookListType.Podium}><PodiumList books={books} /></ScaleAnimationContainer> 
                : <ScaleLeftAnimationContainer isEntering={listType === BookListType.List}><DefaultList books={books} /></ScaleLeftAnimationContainer>
            }
        </div>
    )
}