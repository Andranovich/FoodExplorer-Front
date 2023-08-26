import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme}) => theme.COLORS.DARK_400};
        color: ${({ theme}) => theme.COLORS.WHITE_100};
        font-family: 'Roboto Slab', serif;
        font-size: 16px;

        -webkit-font-smoothing: antialiased;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
    }

    body, input, button, textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    }  

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`;