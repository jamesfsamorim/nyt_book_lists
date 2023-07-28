import styled from "styled-components";
import { Oswald } from 'next/font/google'

const titleFont = Oswald({
    weight: ["700", "500"],
    subsets: ["latin"],
})

export const Header = styled.div`
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 1px 3px #00000080;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 2;
`

export const HomeTitle = styled.h1`
    text-transform: capitalize;
    font-family: ${titleFont.style.fontFamily};
    font-weight: 500;
    margin: 0;
`

export const HomeSubtitle = styled.h2`
    font-family: ${titleFont.style.fontFamily};
    font-weight: 500;
    font-size: medium;
    color: grey;
    margin: 0;
    margin-bottom: 10px;
`

export const HeaderLogo = styled.img`
    height: 150px;
    width: 200px;
`

export const Container = styled.div`
    box-shadow: 0px 1px 3px #00000080;
    padding: 10px 5%;
    margin-top: 70px;

    @media (min-width: 1670px) {
        padding: 10px 10%;
    }
`

export const Footer = styled.div`
    width: 100%;
    height: 150px;
    margin-top: 10px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const CreatedBy = styled.span`
    font-family: ${titleFont.style.fontFamily};
    font-weight: 500;
`

export const SocialMediaInfo = styled.span`
    color: #000
`