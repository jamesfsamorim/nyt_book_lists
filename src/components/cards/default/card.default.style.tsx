import styled from "styled-components";
import { Oswald, Noto_Serif } from 'next/font/google'

const titleFont = Oswald({
    weight: ["700", "500"],
    subsets: ["latin"],
})

const authorFont = Noto_Serif({
    weight: "300",
    subsets: ["latin"],
})

export const CardContainer = styled.div`
    box-shadow: inset 0px 0px 1px 1px #0000006b;
    padding: 10px;
    border-bottom-right-radius: 10px;
    border-left: 3px solid #000;
    width: auto;
    height: 81px;
    transform: translateY(0);
    transition: all ease-in-out 0.3s;
    display: grid;
    grid-template-columns: 4% 62% 38%;

    &:hover {
        box-shadow: 6px 6px 6px 0px #0000006b;
        transform: translateY(-5px);
    }

    @media (max-width: 660px) {
        grid-template-columns: 5% 65% 30%;
    }

    @media (max-width: 480px) {
        grid-template-columns: 8% 63% 27%;
    }
`

export const GoldCardContainer = styled(CardContainer)`
    border-left: 3px solid #D9A441;
    box-shadow: inset 0px 0px 1px 1px #D9A4416b;

    &:hover {
        box-shadow: 6px 6px 6px 0px #D9A4416b;
    }
`

export const SilverCardContainer = styled(CardContainer)`
    border-left: 3px solid #CCC2C2;
    box-shadow: inset 0px 0px 1px 1px #CCC2C26b;

    &:hover {
        box-shadow: 6px 6px 6px 0px #CCC2C26b;
    }
`

export const BronzeCardContainer = styled(CardContainer)`
    border-left: 3px solid #CD7F32;
    box-shadow: inset 0px 0px 1px 1px #CD7F326b;

    &:hover {
        box-shadow: 6px 6px 6px 0px #CD7F326b;
    }
`

export const RankBackground = styled.div`
    position: relative;
    top: -10px;
    left: -11px;
    width: 20px;
    padding: 10px;
    background-color: #000;
    color: #fff;
    border-bottom-right-radius: 90%;
    z-index: 1;
`

export const GoldRankBackground = styled(RankBackground)`
    background-color: #D9A441;
    color: #fff;
`

export const SilverRankBackground = styled(RankBackground)`
    background-color: #CCC2C2;
    color: #000;
`

export const BronzeRankBackground = styled(RankBackground)`
    background-color: #CD7F32;
    color: #fff;
`

export const RankNumber = styled.span`
    font-family: ${titleFont.style.fontFamily};
    font-weight: 700;
    font-size: 14px;
`

export const PortraitImg = styled.div`
    height: 80px;
    display: flex;
    width: 60px;
    justify-content: center;
    align-items: center;
    margin-right: 30px;

    @media (max-width: 660px) {
        display: none;
    }
`

export const BookImg = styled.img`
    height: 90px;
    max-width: 58px;
`

export const ImportantLabel = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    color: #000;
    margin-left: 20px;
`

export const GoldImportantLabel = styled(ImportantLabel)`
    color: #D9A441;
`

export const SilverImportantLabel = styled(ImportantLabel)`
    color: #CCC2C2;
`

export const BronzeImportantLabel = styled(ImportantLabel)`
    color: #CD7F32;
`

export const BookTitle = styled.div`
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    font-family: ${titleFont.style.fontFamily};
    font-weight: 700;

    @media (max-width: 480px) {
        font-size: 8px;
    }
`

export const BookAuthor = styled.div`
    display: flex;
    align-items: center;
    text-transform: capitalize;
    font-family: ${authorFont.style.fontFamily};
    font-size: 12px;

    @media (max-width: 480px) {
        font-size: 8px;
    }
`

export const BookDescription = styled.div`
    display: block;
    font-size: 16px;
    line-height: 1.125rem;
    white-space: normal;
    height: 60px;
    overflow-y: auto;

    @media (max-width: 480px) {
        font-size: 9px;
    }
`

export const BookActions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 5px;
    height: 76px;
`

export const LabelActions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    gap: 5px;
    font-size: 12px;
    text-transform: uppercase;
    font-family: ${titleFont.style.fontFamily};
    font-weight: 500;
    text-decoration: none;

    @media (max-width: 480px) {
        font-size: 9px;
        margin-right: -6px;
    }
`

export const BookRank = styled.div`
    display: block;
    height: 80px;
`

export const BookInfo = styled.div`
    display: block;
    height: 80px;
`

export const ActionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    gap: 5px;
    height: 80px;
`