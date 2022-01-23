import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    --green: #47C315;
    --red: #EF2308;
    --yellow: #EBCA0F;
    --white: #fdfdff;
    }

    body {
    background: ${props => props.theme.colors.background};
    transition: .2s linear;

    }

    h1,
    p {
    color: ${props => props.theme.colors.text};
    letter-spacing: 0.02rem;
    transition: .2s ease;
    }

`