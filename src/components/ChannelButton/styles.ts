import styled from 'styled-components';

import { Hashtag } from "styled-icons/heroicons-outline";
import { PersonAdd, Settings } from "styled-icons/material";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 6px 2px 6px 0px;
    
    border-radius: 4px;

    background-color: transparent;

    transition: background-color .2s;

    cursor: pointer;

    div {
        display: flex;
        align-items: center;
    }

    div span {
        margin-left: 8px;

        font-size: 1.4rem;
        color: var(--senary);
    }

    &:hover, &.active {
        background-color: var(--quinary);

        div span {
            color: var(--white);
        }

        > div:nth-child(2) svg {
            display: inline;
        }
    }

    > div:nth-child(2) svg {
        display: none;
    }
`;

export const HashtagIcon = styled(Hashtag)`
    width: 20px;
    height: 20px;

    color: var(--symbol);

`;

export const InviteIcon = styled(PersonAdd)`    
    width: 16px;
    height: 16px;

    color: var(--symbol);

    cursor: pointer;
    transition: color .2s;

    &:hover {
        color: var(--white);
    }

    margin-right: 8px;

`;

export const SettingsIcon = styled(Settings)`
    width: 16px;
    height: 16px;

    color: var(--symbol);

    cursor: pointer;
    transition: color .2s;

    &:hover {
        color: var(--white);
    }

`;
