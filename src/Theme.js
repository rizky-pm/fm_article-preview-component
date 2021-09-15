import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        primary: 'hsl(217, 19%, 35%)',
        secondary: 'hsl(214, 17%, 51%)',
        tertiary: 'hsl(212, 23%, 69%)',
        lightGrayishBlue: 'hsl(210, 46%, 95%)',
    },
    fontweights: {
        medium: 500,
        bold: 700,
    },
};

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;

// font-family: 'Manrope', sans-serif;
