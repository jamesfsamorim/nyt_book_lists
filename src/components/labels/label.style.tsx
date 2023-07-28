import { LabelProps } from "@/models/label.model";
import styled from "styled-components";

export const RightLabel = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'backgroundColor',
}) <LabelProps>`
    background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : '#000'};
    color: ${({ color }) => color ? color : '#fff'};
    display: block;
    padding-left: 5px;
    padding-right: 5px;
    margin-right: -10px;

    & > * {
        text-decoration: none;
        color: ${({ color }) => color ? color : '#fff'};
    }

    &>svg {
        margin-left: -17px;
        margin-top: -6px;
        margin-bottom: -9px;
        margin-right: -12px;
        height: 30px;
        width: 30px;
        color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : '#000'};
    }
`