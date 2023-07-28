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
    min-width: 185px;
    max-width: 240px;
    width: 80%;
    height: 520px;
    transform: translateY(0);
    transition: all ease-in-out 0.3s;

    &:hover {
        box-shadow: 6px 6px 6px 0px #0000006b;
        transform: translateY(-5px);
    }
`

export const GoldCardContainer = styled(CardContainer)`
    border-left: 3px solid #D9A441;
    transform: translateY(-35px);
    box-shadow: inset 0px 0px 1px 1px #D9A4416b;

    &:hover {
        transform: translateY(-40px);
        box-shadow: 6px 6px 6px 0px #D9A4416b;
    }
`

export const SilverCardContainer = styled(CardContainer)`
    border-left: 3px solid #CCC2C2;
    transform: translateY(-25px);
    box-shadow: inset 0px 0px 1px 1px #CCC2C26b;

    &:hover {
        transform: translateY(-30px);
        box-shadow: 6px 6px 6px 0px #CCC2C26b;
    }
`

export const BronzeCardContainer = styled(CardContainer)`
    border-left: 3px solid #CD7F32;
    transform: translateY(-15px);
    box-shadow: inset 0px 0px 1px 1px #CD7F326b;

    &:hover {
        transform: translateY(-20px);
        box-shadow: 6px 6px 6px 0px #CD7F326b;
    }
`

export const RankBackground = styled.div`
    position: relative;
    top: -10px;
    left: -10px;
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
    height: 250px;
    justify-content: center;
    display: flex;
    position: relative;
    top: -30px;
`

export const BookImg = styled.img`
    height: 250px;
    min-width: 105px;
    max-width: 160px;
    width: 80%;
`

export const ImportantLabel = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    color: #fff;
    margin-left: -10px;
    margin-right: -10px;
    margin-top: -30px;
    padding: 5px;
`

export const GoldImportantLabel = styled(ImportantLabel)`
    background-color: #D9A441;
    color: #fff;
`

export const SilverImportantLabel = styled(ImportantLabel)`
    background-color: #CCC2C2;
    color: #000;
`

export const BronzeImportantLabel = styled(ImportantLabel)`
    background-color: #CD7F32;
    color: #fff;
`

export const BookTitle = styled.div`
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    font-family: ${titleFont.style.fontFamily};
    font-weight: 700;
`

export const BookAuthor = styled.div`
    display: flex;
    justify-content: end;
    text-transform: capitalize;
    font-family: ${authorFont.style.fontFamily};
    font-size: 12px;
`

export const BookDescription = styled.div`
    display: block;
    font-size: 16px;
    line-height: 1.125rem;
    min-height: 45px;
    max-height: 95px;
    width: 100%;
    white-space: normal;
    margin-top: 10px;
    margin-bottom: 10px;
    overflow-y: auto;
`

export const BookActions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: end;
    height: 65px;
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
`
