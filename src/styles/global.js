import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #1E192C;
        color: #FFF;
        font-family: 'Open Sans';
    }

    img {
        max-width: 100%;
        display: block;
    }
`