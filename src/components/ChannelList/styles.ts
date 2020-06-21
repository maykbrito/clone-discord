import styled from 'styled-components';

import { Add } from "styled-icons/material";

export const Container = styled.div`
    grid-area: CL;

    display: flex;
    flex-direction: column;

    padding: 16px 12px 24px 16px;

    background-color: var(--secondary);
`;

export const Category = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 6px;

    span {
        text-transform: uppercase;
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--gray);

        cursor: pointer;

        transition: .2s;

        &:hover{
            color: var(--white);
        }
    }
`;
export const AddCategoryIcon = styled(Add)`
    width: 2.2rem;
    height: 2.2rem;

    color: var(--symbol);

    cursor: pointer;

    transition: .2s;

    &:hover{
        color: var(--white);
    }

`;