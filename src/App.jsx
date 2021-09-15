import React from 'react';
import styled from 'styled-components';

import Header from './Components/Header';
import Content from './Components/Content';
import Meta from './Components/Meta';

const Card = styled.main`
    overflow: hidden;
    background-color: white;
    width: 20.3125rem;
    height: 31.25rem;
    border-radius: 0.625rem;
`;

function App() {
    return (
        <Card>
            <Header />
            <Content />
            <Meta />
        </Card>
    );
}

export default App;
