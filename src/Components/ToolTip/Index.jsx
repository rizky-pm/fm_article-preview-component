import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: ${(props) => (props.showToolTip ? 'flex' : 'none')};
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    background-color: ${(props) => props.theme.colors.primary};
    bottom: 3.125rem;
    right: -50%;
    width: 14.0625rem;
    padding: 0.625rem;
    height: 100%;
    border-radius: 0.625rem;
    transform: translateX(-40%);
    transition: all ease-in-out 0.4s;

    ::after {
        position: absolute;
        content: '';
        border: 0.46875rem solid transparent;
        border-top-color: ${(props) => props.theme.colors.primary};
        bottom: -0.875rem;
        right: 49%;
        transform: translateX(50%);
    }

    @media only screen and (max-width: ${(props) =>
            props.theme.breakpoints.tablets}) {
        display: flex;
        width: 20.3125rem;
        height: 5rem;
        padding: 0 1.25rem;
        bottom: -1.25rem;
        right: -1.25rem;
        transform: ${(props) =>
            props.showToolTip ? 'translateY(6.25rem)' : 'translateY(0)'};
        border-radius: 0;
        justify-content: space-between;
        transition: all ease-in-out 0.4s;
        opacity: 1;

        ::after {
            display: none;
        }
    }
`;

const ToolTip = (props) => {
    return (
        <Container showToolTip={props.showToolTip}>{props.children}</Container>
    );
};

export default ToolTip;
