import React, { useRef, useEffect } from 'react';

import ChannelMessage from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon, Mention } from './styles';


const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }

    }, [messagesRef])

    return (
        <Container>
            <Messages ref={messagesRef}>
                <ChannelMessage
                    author="Mayk Brito"
                    content="Did you found any honey @Guilherme Rodz"
                    date="20/06/2020"
                />
                <ChannelMessage
                    isBot
                    author="Diego Fernandes"
                    content="@Guilherme Rodz can you help me?"
                    date="20/06/2020"
                />
                <ChannelMessage
                    hasMention
                    author="Guilherme Rodz"
                    content={
                        <>
                        <Mention>@Mayk Brito</Mention> Yeah Bro!
                        </>
                    }
                    date="20/06/2020"
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Buzzzzz in #honey-chat"/>
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;