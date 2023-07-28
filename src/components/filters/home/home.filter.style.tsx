import styled from "styled-components"
import { Oswald, Noto_Serif } from 'next/font/google'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const titleFont = Oswald({
    weight: ["700", "500"],
    subsets: ["latin"],
})

const subtitleFont = Noto_Serif({
    weight: "300",
    subsets: ["latin"],
})

export const FiltersContainer = styled.div`
    position: static;
    display: flex;
    height: 50px;
    border-bottom: 3px solid #000;
    border-top: 1px solid #D6D6D6;
    justify-content: center;
    align-items: center;
    width: auto;
    z-index: 2;
`

export const FloatFiltersContainer = styled(FiltersContainer)`
    width: 90%;
    background-color: #fff;
    position: fixed;
    top: 60px;
    left: 5%;
`

export const GenreListFilterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    width: auto;

  @media (max-width: 920px) {
    flex-direction: column;
    width: 100%;
    overflow-y: auto;
    align-items: center;
    padding-top: 3px;
    height: 70px;
  }
`

export const DateFilterContainer = styled.div`
    font-family: ${subtitleFont.style.fontFamily};
    font-weight: 300;
    margin-top: 25px;
    min-width: 120px;

    &>svg {
        font-size: 10px;
        cursor: pointer;
    }
`

export const FilterContainer = styled(FormControl)`
    margin-top: 5px;
    min-width: 120px;
`

export const FilterInputLabel = styled(InputLabel)`
    font-family: ${titleFont.style.fontFamily};
    font-weight: 500;
    text-transform: uppercase;
    color: #000;
    font-size: 14px;
`