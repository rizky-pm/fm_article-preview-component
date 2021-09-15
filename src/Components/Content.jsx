import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.section`
    width: 100%;
    height: 13.75rem;
    padding: 1.5625rem;
`;

const MainText = styled.p`
    font-weight: ${(props) => props.theme.fontweights.bold};
    color: ${(props) => props.theme.colors.primary};
    font-size: 1rem;
    margin-bottom: 1.25rem;
`;

const SecondaryText = styled.p`
    color: ${(props) => props.theme.colors.secondary};
    font-size: 0.875rem;
`;

const Content = () => {
    return (
        <ContentContainer>
            <MainText>
                Shift the overall look and feel by adding these wonderful
                touches to furniture in your home
            </MainText>
            <SecondaryText>
                Ever been in a room and felt like something was missing? Perhaps
                it felt slightly bare and uninviting. I’ve got some simple tips
                to help you make any room feel complete.
            </SecondaryText>
        </ContentContainer>
    );
};

export default Content;
