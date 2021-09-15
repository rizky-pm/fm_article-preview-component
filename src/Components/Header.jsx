import React from 'react';
import styled from 'styled-components';

import HeroImage from '../images/drawers.jpg';

const Container = styled.img`
    width: 100%;
    height: 12.5rem;
`;

const Header = () => {
    return (
        <>
            <Container src={HeroImage} />
        </>
    );
};

export default Header;
