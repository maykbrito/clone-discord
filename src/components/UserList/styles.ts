import styled from 'styled-components';

export const Container = styled.div`
    grid-area: UL;

    display: flex;
    flex-direction: column;

    padding: 4px 6px 0 12px;

    background-color: var(--secondary);

    min-height: calc(100vh - 46px);

    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 4px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--tertiary);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color: var(--secondary)
    }
`;

export const Role = styled.span`
    margin-top: 16px;

    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--gray);

`;

export const User = styled.div`
    margin-top: 4px;
    padding: 6px;

    display: flex;
    align-items: center;

    cursor: pointer;
    
    border-radius:4px;
    background-color: transparent;
    transition: .2s;

    &:hover{
        background-color: rgba(255,255,255, 0.1);
        opacity: 1;
    }

    

    strong {
        margin-left: 12px;
        font-weight: 500;
        
        opacity: .4;

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        font-size: 1.6rem;
        color: var(--white);
    }

    span {
        margin-left: 8px;

        background-color: var(--discord);
        color: var(--white);
        border-radius: 4px;
        padding: 4px 6px;
        
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1rem;
    }
`;

export const Avatar = styled.div`
    flex-shrink: 0;

    width: 32px;
    height: 32px;

    background-color: var(--primary);

    border-radius: 50%;

    &.bot {
        background-color: var(--mention-detail);
    }
`;
