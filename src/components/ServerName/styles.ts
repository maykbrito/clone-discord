import styled from 'styled-components';

import { ExpandMore } from "styled-icons/material";

export const Container = styled.div`
    background-color: var(--secondary);

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding:0 12px 0 16px;

    box-shadow: 0px 1px 0px 0px rgba(0,0,0, 0.2 );
    z-index: 2;

    cursor: pointer;

    transition: .2s;

    &:hover {
        background-color: var(--primary)
    }
`;

export const Title = styled.h1`
    color: var(--white);
    font-size: 16px;
`;

export const ExpandIcon = styled(ExpandMore)`
    width: 2.4rem;
    height: 2.4rem;

    padding-top: 2px;

    color: var(--white);

`;