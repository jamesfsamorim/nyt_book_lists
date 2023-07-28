import styled from "styled-components";

export const PodiumListContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 40px 0px 10px 0px;
    justify-content: center;
    height: 550px;

    @media (max-width: 1260px) {
        justify-content: flex-start; 
        overflow-x: auto;
        box-sizing: border-box;
        height: 605px;

        & > * {
            min-width: 220px;
        }
    }
`