import React, { useState } from 'react';
import styled from 'styled-components';

import { ShareIconSvg } from '../../Icons/ShareIconSvg';
import Avatar from '../../images/avatar-michelle.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';

import ToolTip from '../ToolTip/Index';

const Container = styled.section`
    display: grid;
    align-items: center;
    position: relative;
    grid-template-areas:
        'avatar fullname share'
        'avatar date share';
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 0.1fr 1fr 0.1fr;
    grid-column-gap: 0.9375rem;
    width: 100%;
    height: 2.5rem;
    margin-top: 1.5625rem;

    @media only screen and (max-width: ${(props) =>
            props.theme.breakpoints.tablets}) {
        margin-top: 2.1875rem;
    }
`;

const ProfilePicture = styled.img`
    grid-area: avatar;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
`;

const FullName = styled.p`
    grid-area: fullname;
    color: ${(props) => props.theme.colors.primary};
    font-weight: ${(props) => props.theme.fontweights.bold};
`;

const Date = styled.p`
    grid-area: date;
    color: ${(props) => props.theme.colors.tertiary};
`;

const ShareContainer = styled.div`
    grid-area: share;
    display: ${(props) => (props.showToolTip ? 'none' : 'grid')};
    place-items: center;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.lightGrayishBlue};
    width: 1.875rem;
    height: 1.875rem;
    border-radius: 50%;
    transition: all ease-in-out 0.4s;

    @media only screen and (max-width: ${(props) =>
            props.theme.breakpoints.tablets}) {
        background-color: ${(props) => props.theme.colors.secondary};
        display: grid;
    }
`;

const ShareIcon = styled(ShareIconSvg)`
    color: ${(props) => props.theme.colors.primary};

    @media only screen and (max-width: ${(props) =>
            props.theme.breakpoints.tablets}) {
        color: ${(props) => props.theme.colors.lightGrayishBlue};
    }
`;

const AwesomeIcon = styled(FontAwesomeIcon)`
    cursor: pointer;
    color: white;
    font-size: 1rem;
    transition: color 0.2s ease;

    :hover {
        color: ${(props) => props.theme.colors.tertiary};
    }

    @media only screen and (max-width: ${(props) =>
            props.theme.breakpoints.tablets}) {
        font-size: 1.625rem;
    }
`;

const ToolTipDesc = styled.p`
    color: ${(props) => props.theme.colors.tertiary};
    font-size: 0.75rem;
    letter-spacing: 0.3125rem;

    @media only screen and (max-width: ${(props) =>
            props.theme.breakpoints.tablets}) {
        font-size: 0.875rem;
    }
`;

const Publisher = () => {
    const [showToolTip, setShowToolTip] = useState(false);

    const handleToolTip = () => {
        setShowToolTip(!showToolTip);
    };

    return (
        <Container>
            <ProfilePicture src={Avatar} />
            <FullName>Michelle Appleton</FullName>
            <Date>28 Jun 2020</Date>
            <ShareContainer onClick={handleToolTip}>
                <ShareIcon />
            </ShareContainer>
            <ToolTip showToolTip={showToolTip}>
                <ToolTipDesc>SHARE</ToolTipDesc>
                <AwesomeIcon icon={faFacebookSquare} />
                <AwesomeIcon icon={faTwitter} />
                <AwesomeIcon icon={faPinterest} />
                <ShareContainer
                    showToolTip={showToolTip}
                    onClick={handleToolTip}
                >
                    <ShareIcon />
                </ShareContainer>
            </ToolTip>
        </Container>
    );
};

export default Publisher;
