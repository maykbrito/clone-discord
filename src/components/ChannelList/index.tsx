import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';
import ChannelButton from "../ChannelButton";

const ServerName: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Text Channels</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton selected channelName="honey" />
            <ChannelButton channelName="flowers" />
            <ChannelButton channelName="hive" />
            <ChannelButton channelName="queen" />
        </Container>
    )
};

export default ServerName;