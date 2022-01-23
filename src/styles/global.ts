import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    --green: #40b113;
    --red: #c72712;
    --yellow: #c77f12;
    }

    body {
    background: ${props => props.theme.colors.background};
    }

    h1,
    p {
    color: var(--black);
    letter-spacing: 0.02rem;
    }

`