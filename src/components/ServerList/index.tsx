import React from 'react';

import { Container, Separator } from './styles';
import ServerButton from "../ServerButton";

const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton isHome />
            <Separator />
            <ServerButton 
                color="#7EDA84" 
                serverName="frog"
                img="https://image.flaticon.com/icons/svg/3069/3069170.svg"
            />
            <ServerButton
                color="#E08A3A"
                serverName="Travel"
                img="https://image.flaticon.com/icons/svg/3112/3112928.svg"
                hasNotifications />
            <ServerButton 
                color="#F6D24A"
                img="https://image.flaticon.com/icons/png/512/3011/3011374.png"
                serverName="Masket"
                mentions={3}
            />
        </Container>
    )
};

export default ServerList;