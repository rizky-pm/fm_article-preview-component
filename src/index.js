import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyles from './Global.css';
import Theme from './Theme';

import App from './App';

ReactDOM.render(
    <Theme>
        <GlobalStyles />
        <App />
    </Theme>,
    document.getElementById('root')
);
