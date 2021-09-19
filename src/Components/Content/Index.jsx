import React from 'react';

import styled from 'styled-components';

import Publisher from '../Publisher/Index';

const Container = styled.section`
    width: 100%;
    height: 100%;
    padding: 2.5rem;

    @media only screen and (max-width: ${(props) =>
            props.theme.breakpoints.tablets}) {
        padding: 1.875rem 1.25rem;
        height: 11.25rem;
    }
`;

const PrimaryText = styled.p`
    color: ${(props) => props.theme.colors.primary};
    font-weight: ${(props) => props.theme.fontweights.bold};
    font-size: 1.25rem;
`;

const SecondaryText = styled.p`
    color: ${(props) => props.theme.colors.tertiary};
    margin-top: 0.625rem;
    font-size: 0.8125rem;
`;

const Content = () => {
    return (
        <Container>
            <PrimaryText>
                Shift the overall look and feel by adding these wonderful
                touches to furniture in your home
            </PrimaryText>
            <SecondaryText>
                Ever been in a room and felt like something was missing? Perhaps
                it felt slightly bare and uninviting. I’ve got some simple tips
                to help you make any room feel complete.
            </SecondaryText>
            <Publisher />
        </Container>
    );
};

export default Content;
