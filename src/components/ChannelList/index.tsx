import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';
import ChannelButton from "../ChannelButton";

const ServerName: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Text Channel</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="free-chat" />
            <ChannelButton channelName="flowers" />
        </Container>
    )
};

export default ServerName;