import styled from 'styled-components';

import { lumiance } from "../../utils";
export const Container = styled.div`
    display: flex;
    align-items: start;

    padding: 4px 16px;
    margin-right: 4px;
    margin-bottom: 16px;

    background-color: transparent;

    &:hover {
        background-color: rgba(0,0,0,0.06);
    }

    &.mention {
        background-color: var(--mention-message);

        border-left: 2px solid var(--mention-detail);
        padding-left: 12px;

        &:hover {
            background-color: ${lumiance("--mention-message", 0.04)};
        }
    }

    
`;

export const Avatar = styled.div`
    min-width: 40px;
    min-height: 40px;

    background-color: var(--secondary);
    border-radius: 50%;

    &.bot{
        background-color: var(--mention-detail);
    }
`;

export const Message = styled.div`
    min-height: 40px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-left:16px;
`;

export const Header = styled.div`
    display:flex;
    align-items: center;

    strong {
        color: var(--white);
        font-size: 1.6rem;

    }
    span {
        margin-left: 6px;

        background-color: var(--discord);
        color: var(--white);
        border-radius: 4px;
        padding: 4px 6px 4px;
        
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1rem;
    }

    time {
        margin-left: 6px;
        font-size: 1.2rem;
        color: var(--gray);
    }
`;

export const Content = styled.div`
    font-size: 1.4rem;
    color: var(--white);


`;