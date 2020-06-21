import React from 'react';

import { Container, Role, User, Avatar  } from './styles';



interface UserProps {
    nickname: string,
    isBot?: boolean,
}
const UserRow: React.FC<UserProps> = ({
    nickname,
    isBot
}) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
}


const ServerName: React.FC = () => {
    return (
        <Container>
            <Role>Avaiable—1</Role>
            <UserRow nickname="Mayk Brito" />

            <Role>Offline—10</Role>
            <UserRow nickname="Diego Fernandes" isBot />
            <UserRow nickname="Guilherme Rodz" />
            <UserRow nickname="Sean Mcclain" />
            <UserRow nickname="Adelyn Harrison" />
            <UserRow nickname="Victoria Lindsey" />
            <UserRow nickname="Edward Coffey" />
            <UserRow nickname="Eddie Galloway" />
            <UserRow nickname="Rigoberto Dominguez" />
            <UserRow nickname="Norah Harrison" />
            <UserRow nickname="Kael Cox" />
            <UserRow nickname="Charlotte Garrison" />
            <UserRow nickname="Jaida Rodriguez" />
            <UserRow nickname="Brycen Shepard" />
            <UserRow nickname="Jayvon Sherman" />

        </Container>
    )
};

export default ServerName;