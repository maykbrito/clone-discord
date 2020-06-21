import styled from 'styled-components';

import { AlternateEmail } from "styled-icons/material";

export const Container = styled.div`
    grid-area: CD;

    background-color: var(--primary);

    display: flex;
    flex-direction:column;
    justify-content: space-between;
`;

export const Messages = styled.div`
    padding: 20px 0;

    display: flex;
    flex-direction: column;

    min-height: calc(100vh - 46px - 68px);
    max-width: 99.7%;
    
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 8px;
        border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--tertiary);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color: var(--secondary);
        border-radius: 4px;
    }
`;

export const InputWrapper = styled.div`
    width: 100%;

    padding: 0 16px;
`;

export const Input = styled.input`
    width: 100%;
    height: 44px;

    padding: 0 10px 0 57px;
    border-radius: 6px;

    color: var(--white);
    background-color: var(--chat-input);

    position: relative;

    &::placeholder {
        color: var(--gray);
    }
`;

export const InputIcon = styled(AlternateEmail)`

    width: 2.4rem;
    height: 2.4rem;

    position: relative;
    top: -50%;
    left: 16px;
    transition: 180ms ease-in-out;

    color: var(--gray);
`;

export const Mention = styled.span`
    color: var(--link);
    cursor: pointer;

    &:hover {
        text-decoration:underline;
    }
`;

