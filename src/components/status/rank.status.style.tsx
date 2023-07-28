import styled from "styled-components"

export const StatusRankBackground = styled.div`
    position: relative;
    top: -5px;
    left: -5px;
    width: 25px;
    z-index: 1;

    &>svg {
        font-size: 16px;
        font-weight: bold;
    }
`

export const NeutralStatusRankBackground = styled(StatusRankBackground)`
    color: grey;
`

export const NegativeStatusRankBackground = styled(StatusRankBackground)`
    color: #d12222;
`

export const PositiveStatusRankBackground = styled(StatusRankBackground)`
    color: #1aa828;
`

export const HotStatusRankBackground = styled(StatusRankBackground)`
    color: #EE8F0A;
`