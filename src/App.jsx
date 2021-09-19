import React from 'react';
import styled from 'styled-components';

import Hero from './Components/Hero/Index';
import Content from './Components/Content/Index';

const Card = styled.main`
    background-color: white;
    display: grid;
    grid-template-columns: 17.8125rem 2fr;
    width: 45.625rem;
    height: 17.5rem;
    border-radius: 0.625rem;

    @media only screen and (max-width: ${(props) =>
            props.theme.breakpoints.tablets}) {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        width: 20.3125rem;
        height: 32.1875rem;
    }
`;

const Attribution = styled.div`
    position: absolute;
    bottom: 2.5%;
    right: 50%;
    transform: translateX(50%);
    text-align: center;
    font-size: 0.875rem;
    color: black;

    @media only screen and (max-width: ${(props) =>
            props.theme.breakpoints.tablets}) {
        width: 18.75rem;
        bottom: 5%;
    }

    a {
        color: black;
        transition: all ease 0.2s;
        :hover {
            color: ${(props) => props.theme.colors.primary};
            text-decoration: none;
        }
    }
`;

const Container = styled.section`
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
`;

function App() {
    return (
        <Container>
            <Card>
                <Hero />
                <Content />
            </Card>
            <Attribution>
                Challenge by{' '}
                <a href='https://www.frontendmentor.io?ref=challenge'>
                    Frontend Mentor
                </a>
                . Coded by{' '}
                <a href='https://github.com/rizky-pm/'>Rizky Putra Mahendra</a>.
            </Attribution>
        </Container>
    );
}

export default App;
