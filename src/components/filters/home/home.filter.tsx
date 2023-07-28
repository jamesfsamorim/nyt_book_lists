import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { DateFilterContainer, FilterContainer, FilterInputLabel, FiltersContainer, FloatFiltersContainer, GenreListFilterContainer } from './home.filter.style';
import { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { format } from 'date-fns';

interface FilterOption {
    value: string
    title: string
}

const FICTION_OPTIONS: FilterOption[] = [
    { value: 'combined-print-and-e-book-fiction', title: 'Combined Print & E-Book Fiction' },
    { value: 'hardcover-fiction', title: 'Hardcover Fiction' },
    { value: 'trade-fiction-paperback', title: 'Paperback Trade Fiction' },
]

const NONFICTION_OPTIONS: FilterOption[] = [
    { value: 'combined-print-and-e-book-nonfiction', title: 'Combined Print & E-Book Nonfiction' },
    { value: 'hardcover-nonfiction', title: 'Hardcover Nonfiction' },
    { value: 'paperback-nonfiction', title: 'Paperback Nonfiction' },
    { value: 'advice-how-to-and-miscellaneous', title: 'Advice, How-To & Miscellaneous' },
]

const CHILDRENS_OPTIONS: FilterOption[] = [
    { value: 'childrens-middle-grade-hardcover', title: 'Children’s Middle Grade Hardcover' },
    { value: 'picture-books', title: 'Children’s Picture Books' },
    { value: 'series-books', title: 'Children’s Series' },
    { value: 'young-adult-hardcover', title: 'Young Adult Hardcover' },
]

const MONTHLY_OPTIONS: FilterOption[] = [
    { value: 'audio-fiction', title: 'Audio Fiction' },
    { value: 'audio-nonfiction', title: 'Audio Nonfiction' },
    { value: 'business-books', title: 'Business' },
    { value: 'graphic-books-and-manga', title: 'Graphic Books and Manga' },
    { value: 'mass-market-monthly', title: 'Mass Market' },
    { value: 'middle-grade-paperback-monthly', title: 'Middle Grade Paperback' },
    { value: 'young-adult-paperback-monthly', title: 'Young Adult Paperback' },
]

enum FilterGenreGroup {
    Fiction = 'fiction',
    Nonfiction = 'nonfiction',
    Childrens = 'childrens',
    Monthly = 'monthly',
}

interface HomeFilterProps {
    fetchBookListsByGenre: (filter: string) => void
    fetchBookListsByPublishedDate: (published_date: string) => void
    publishedDate: string
    previousPublishedDate: string
    nextPublishedDate: string
}

export const HomeFilter = ({ fetchBookListsByGenre, fetchBookListsByPublishedDate, publishedDate, previousPublishedDate, nextPublishedDate }: HomeFilterProps) => {
    const [scrolled, setScrolled] = useState(false);
    const [fiction, setFiction] = useState("");
    const [nonfiction, setNonfiction] = useState("");
    const [childrens, setChildrens] = useState("");
    const [monthly, setMonthly] = useState("");

    const filters = {
        [FilterGenreGroup.Fiction]: setFiction,
        [FilterGenreGroup.Nonfiction]: setNonfiction,
        [FilterGenreGroup.Childrens]: setChildrens,
        [FilterGenreGroup.Monthly]: setMonthly,
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const scrollTop = window.scrollY;

        scrollTop > 100 ? setScrolled(true) : setScrolled(false)
    };

    const onChangeFilter = (event: SelectChangeEvent, genreGroup: FilterGenreGroup) => {
        const { value } = event.target
        console.log({ value })

        for (const [filterKey, setState] of Object.entries(filters)) {
            setState(filterKey as FilterGenreGroup === genreGroup ? value : '');
        }

        fetchBookListsByGenre(value)
    }

    const onChangeDateFilter = (new_date_filter: string) => {
        if(new_date_filter !== "") {
            fetchBookListsByPublishedDate(new_date_filter)
        }
    }

    const getFilters = () => (
        <GenreListFilterContainer>
            <FilterContainer variant="standard">
                <FilterInputLabel>Fiction</FilterInputLabel>
                <Select
                    data-testid="fiction-select"
                    value={fiction}
                    onChange={(event) => onChangeFilter(event, FilterGenreGroup.Fiction)}
                >
                    <MenuItem key="fiction-none" value=""><em>None</em></MenuItem>
                    {FICTION_OPTIONS.map(option => <MenuItem key={option.value} value={option.value}>{option.title}</MenuItem>)}
                </Select>
            </FilterContainer>
            <FilterContainer variant="standard">
                <FilterInputLabel>Nonfiction</FilterInputLabel>
                <Select
                    value={nonfiction}
                    onChange={(event) => onChangeFilter(event, FilterGenreGroup.Nonfiction)}
                >
                    <MenuItem key="nonfiction-none" value=""><em>None</em></MenuItem>
                    {NONFICTION_OPTIONS.map(option => <MenuItem key={option.value} value={option.value}>{option.title}</MenuItem>)}
                </Select>
            </FilterContainer>
            <FilterContainer variant="standard">
                <FilterInputLabel>Children's</FilterInputLabel>
                <Select
                    value={childrens}
                    onChange={(event) => onChangeFilter(event, FilterGenreGroup.Childrens)}
                >
                    <MenuItem key="children-none" value=""><em>None</em></MenuItem>
                    {CHILDRENS_OPTIONS.map(option => <MenuItem key={option.value} value={option.value}>{option.title}</MenuItem>)}
                </Select>
            </FilterContainer>
            <FilterContainer variant="standard">
                <FilterInputLabel>Monthly Lists</FilterInputLabel>
                <Select
                    value={monthly}
                    onChange={(event) => onChangeFilter(event, FilterGenreGroup.Monthly)}
                >
                    <MenuItem key="monthly-none" value=""><em>None</em></MenuItem>
                    {MONTHLY_OPTIONS.map(option => <MenuItem key={option.value} value={option.value}>{option.title}</MenuItem>)}
                </Select>
            </FilterContainer>
            <DateFilterContainer>
                <ArrowBackIosIcon data-testid="previousDateFilter" onClick={() => onChangeDateFilter(previousPublishedDate)} />
                    {publishedDate && format(new Date(publishedDate), 'MMMM dd, yyyy')}
                <ArrowForwardIosIcon onClick={() => onChangeDateFilter(nextPublishedDate)}/>
            </DateFilterContainer>
        </GenreListFilterContainer>
    )

    return scrolled
        ? <FloatFiltersContainer data-testid="filters">{getFilters()}</FloatFiltersContainer>
        : <FiltersContainer data-testid="filters">{getFilters()}</FiltersContainer>

}