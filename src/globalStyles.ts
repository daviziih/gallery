import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body,html {
        font: 400 1rem 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
    }
`
