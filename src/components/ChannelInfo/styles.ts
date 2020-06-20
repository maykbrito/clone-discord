import styled from 'styled-components';

import { Hashtag } from "styled-icons/heroicons-outline";

export const Container = styled.div`
    grid-area: CI;

    display: flex;
    align-items: center;

    padding: 0 12px;

    background-color: var(--primary);

    box-shadow: 0px 1px 0px 0px rgba(0,0,0, 0.2);
    z-index: 2;
`;

export const HashtagIcon = styled(Hashtag)`
    width: 2.8rem;
    height: 2.8rem;

    color:  var(--symbol);
`;

export const Title = styled.h3`
    padding: 0;
    margin-left: 8px;
    text-transform: lowercase;

    font-size: 1.4rem;
    
    color: var(--white);
`;

export const Separator = styled.div`
    height: 24px;
    width: 1px;

    background-color: var(--white);
    opacity: .2;

    margin: 0 12px;
`;

export const Description = styled.div`
    font-size: 1.4rem;
    color: var(--gray);
`;

