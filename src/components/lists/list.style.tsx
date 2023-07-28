import styled from "styled-components";
import { Oswald } from 'next/font/google'

const titleFont = Oswald({
    weight: ["700", "500"],
    subsets: ["latin"],
})

export const ListTitle = styled.h5`
    text-transform: uppercase;
    font-family: ${titleFont.style.fontFamily};
    font-weight: 500;
    text-decoration: underline;
`

export const ListHeader = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

export const ListActions = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
`

export const ListButtonAction = styled.button`
    padding: 5px;
    border-bottom-right-radius: 5px;
    background-color: #fff;
    color: #000;
    height: 30px;
    align-items: center;
    display: flex;
    cursor: pointer;

    &.active {
        background-color: #000;
        color: #fff;
    }
`
