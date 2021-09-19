import React from 'react';
import styled from 'styled-components';

import DrawersImage from '../../images/drawers.jpg';

const HeroContainer = styled.section`
    overflow: hidden;
    width: 100%;
    height: 100%;

    @media only screen and (max-width: ${(props) =>
            props.theme.breakpoints.tablets}) {
        width: 20.3125rem;
        height: 12.5rem;
    }
`;

const HeroImage = styled.img`
    width: auto;
    max-height: 17.5rem;
    border-radius: 0.625rem;

    @media only screen and (max-width: ${(props) =>
            props.theme.breakpoints.tablets}) {
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
`;

const Hero = () => {
    return (
        <HeroContainer>
            <HeroImage src={DrawersImage} />
        </HeroContainer>
    );
};

export default Hero;
