import styled from 'styled-components';

import { Props } from '.';


export const Button = styled.button<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    width: 48px;
    height: 48px;

    border-radius: 50%;

    margin-bottom: 8px;

    background-color: ${(props) => 
    props.color ? props.color : 'var(--primary)'};

    position: relative;

    img {
        width: 24px;
        height: 24px;
    }

    /* hasNotifications */
    &::before {
        width: 9px;
        height: 9px;

        position: absolute;
        left: -17px;
        top: calc(50% - 4.5px);

        background-color: var(--white);
        border-radius: 50%;

        content: '';

        display: ${props => props.hasNotifications ? 'inline' : 'none'};
    }

    &::after {
        background-color: var(--notification);
        height: 16px;

        padding: 0 4px;

        position: absolute;
        bottom: -4px;
        right: -4px;

        border-radius: 12px;
        border: 4px solid var(--quaternary);

        text-align: right;
        font-size: 13 px;
        font-weight: bold;
        color: var(--white);

        /* put value inside content */
        content: '${props => props?.mentions}';

        /* show or hide based on mention total */
        display: ${ props => props.mentions && props.mentions > 0 ? 'inline' : 'none'}
    }

    transition: .2s;

    &.active, &:hover  {
        border-radius: 16px;
        background-color: ${ props => props.isHome ? 'var(--rocketseat)' : 'var(--discord)'}
    }
`;