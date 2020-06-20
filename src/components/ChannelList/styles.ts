import styled from 'styled-components';

import { Add } from "styled-icons/material";

export const Container = styled.div`
    grid-area: CL;

    display: flex;
    flex-direction: column;

    padding: 24px 12px 24px 16px;

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
    }
`;
export const AddCategoryIcon = styled(Add)`
    width: 20px;
    height: 20px;

    color: var(--symbol);
`;