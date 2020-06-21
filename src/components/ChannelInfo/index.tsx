import React from 'react';

import { Container, HashtagIcon, Title, Separator, Description } from './styles';

const ChannelInfo: React.FC = () => {
    return (
        <Container>
            <HashtagIcon />
            <Title>honey</Title>

            <Separator/>

            <Description>An open channel so you can buzzing around</Description>
        </Container>
    )
};

export default ChannelInfo;