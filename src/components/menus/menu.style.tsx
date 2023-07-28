import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { Oswald } from 'next/font/google'

const titleFont = Oswald({
    weight: ["700", "500"],
    subsets: ["latin"],
})

export const MenuComponent = styled(Menu)`
`

export const MenuButton = styled(Button)`
    padding: 0px 0px 5px 0px;
    line-height: 0;
    font-size: 12px;
    text-transform: uppercase;
    font-family: ${titleFont.style.fontFamily};
    font-weight: 500;
    margin-right: -10px;
    height: 13px;

    @media (max-width: 480px) {
        height: 10px;
    }
`