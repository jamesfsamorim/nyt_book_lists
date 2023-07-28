import styled from "styled-components";

export const DefaultListContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 10px;
    padding: 10px;
    height: 580px;

    @media (max-width: 1285px) {
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        height: 585px;
    }
`