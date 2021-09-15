import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    body {
        box-sizing: border-box;
        font-family: 'Manrope', sans-serif;
        background-color: ${(props) => props.theme.colors.lightGrayishBlue};
        font-size: 0.8125rem; // 13 px
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export default GlobalStyles;
