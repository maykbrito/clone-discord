import styled from 'styled-components';

import { Mic, Headset, Settings } from "styled-icons/material";


export const Container = styled.div`
    grid-area: UI;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--quaternary);

    padding: 12px;

    box-shadow: 0px -1px 0px 0px rgba(0,0,0, 0.2); 
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
`;

export const Avatar = styled.div`

    width: 32px;
    height: 32px;
    border-radius: 50%;

    background-color: var(--gray);
`;

export const UserData = styled.div`

    margin-left: 8px;

    display: flex;
    flex-direction: column;

    strong {
        color: var(--white);
        font-size: 1.2rem;
        display:block;
    }

    span {
        color: var(--gray);
        font-size: 1.2rem;
    }

`;

export const Icons = styled.div`
    svg {
        width: 2.2rem;
        height: 2.2rem;

        color: var(--white);

        opacity:0.4;

        cursor: pointer;
        
        transition: opacity .2s;

        &:hover{
            opacity:1;
        }

        &:not(:first-child) {
            margin-left: 8px;
        }
    }
`;

export const MicIcon = styled(Mic)``;
export const HeadsetIcon = styled(Headset)``;
export const SettingsIcon  = styled(Settings)``;
