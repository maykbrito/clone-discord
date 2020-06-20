import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadsetIcon, SettingsIcon } from './styles';

const UserInfo: React.FC = () => {
    return (
        <Container>
            <Profile>
                <Avatar/>
                <UserData>
                    <strong> Mayk Brito</strong>
                    <span>#1237</span>
                </UserData>
            </Profile>
            <Icons>
                <MicIcon/>
                <HeadsetIcon/>
                <SettingsIcon/>
            </Icons>
        </Container>
    )
};

export default UserInfo;