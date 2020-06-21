import { createGlobalStyle } from 'styled-components';

import { colors } from "../utils";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    html, body, :root {
        height: 100%;
    }

    *, button, input {
        outline: 0;
        border: 0;

        font-family: 'Roboto', sans-serif;
    }

    :root {
        --primary: ${colors["primary"]};
        --secondary: ${colors["secondary"]};
        --tertiary: ${colors["tertiary"]};
        --quaternary: ${colors["quaternary"]};
        --quinary: ${colors["quinary"]};
        --senary: ${colors["senary"]};

        --white: ${colors["white"]};
        --gray: ${colors["gray"]};
        --chat-input: ${colors["chat-input"]};
        --symbol: ${colors["symbol"]};
    
        --notification: ${colors["notification"]};
        --discord: ${colors["discord"]};
        --mention-detail: ${colors["mention-detail"]};
        --mention-message: ${colors["mention-message"]};
    
        --link: ${colors["link"]};
    
        --rocketseat: ${colors["rocketseat"]};
    }
`;