import React from 'react';

import { Button } from './styles';

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
    color?: string;
    img?: string;
    serverName?: string;
}

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions,
    color,
    img,
    serverName
}) => {

    const server = {
        name: serverName || "?",
        srcImg: img || "https://image.flaticon.com/icons/svg/906/906794.svg",
        color
    }

    if(isHome) {
        server.srcImg = 'https://image.flaticon.com/icons/svg/3069/3069171.svg'
        server.name = 'Bee';
        server.color = 'var(--rocketseat)';
    }

    return (
        <Button
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className={selected ? 'active' : ''}
            color={server.color}
        >
            
            <img alt={server.name} src={server.srcImg} />
        </Button>
    )
};

export default ServerButton;