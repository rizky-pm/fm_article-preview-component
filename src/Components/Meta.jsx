import React, { useState } from 'react';
import styled from 'styled-components';

import avatarMichelle from '../images/avatar-michelle.jpg';
import shareIcon from '../images/icon-share.svg';
import facebookIcon from '../images/icon-facebook.svg';
import twitterIcon from '../images/icon-twitter.svg';
import pinterestIcon from '../images/icon-pinterest.svg';

import { ShareIconSvg } from '../Icons/ShareIconSvg';

const MetaContainer = styled.div``;

const NonActiveState = styled.div`
    display: grid;
    grid-template-areas:
        'avatar fullname shareicon'
        'avatar date shareicon';

    place-content: center;
    place-items: center;
    grid-template-columns: 1fr 2fr 0.9fr;
    grid-template-rows: 1.25rem 1.25rem;
    width: 100%;
    height: 4.6875rem;
`;

const ProfilePicture = styled.img`
    grid-area: avatar;
    width: 2.1875rem;
    height: 2.1875rem;
    border-radius: 50%;
`;

const FullName = styled.p`
    grid-area: fullname;
    place-self: start;
    font-weight: ${(props) => props.theme.fontweights.bold};
    color: ${(props) => props.theme.colors.primary};
`;

const Date = styled.p`
    grid-area: date;
    place-self: start;
    color: ${(props) => props.theme.colors.secondary};
`;

const ShareIconContainer = styled.div`
    background-color: ${(props) => props.theme.colors.lightGrayishBlue};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.1875rem;
    height: 2.1875rem;
    border-radius: 50%;
`;

const ShareIcon = styled.img`
    width: 0.9375rem;
    height: 0.8125rem;
`;

const ActiveState = styled.div`
    background-color: ${(props) => props.theme.colors.primary};
    display: grid;
    place-content: center;
    place-items: center;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 2.5rem;
    width: 100%;
    height: 4.6875rem;
    padding-left: 1.5625rem;
    transform: translateY(0.3125rem);
    transition: all 0.5s ease;

    ${({ isStateActive }) =>
        isStateActive &&
        `
        transform: translateY(-75px);
    `}
`;

const ActiveShareIconContainer = styled.div`
    background-color: ${(props) => props.theme.colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.1875rem;
    height: 2.1875rem;
    border-radius: 50%;
`;

const ActiveShareIcon = styled(ShareIconSvg)`
    color: ${(props) => props.theme.colors.lightGrayishBlue};
`;

const ShareText = styled.p`
    color: ${(props) => props.theme.colors.tertiary};
    font-size: 0.9375rem;
    letter-spacing: 0.3125rem;
`;

const SocialMediaContainer = styled.div`
    display: flex;
    width: 5.9375rem;
    justify-content: space-between;
    align-items: center;
    margin-left: -1.25rem;
`;

const SocialMedia = styled.img`
    width: 1.25rem;
    height: 1.25rem;
`;

const Meta = () => {
    const [showShare, setShowShare] = useState(false);

    const share = () => {
        setShowShare(!showShare);
    };

    return (
        <MetaContainer>
            <NonActiveState>
                <ProfilePicture src={avatarMichelle} />
                <FullName>Michelle Appleton</FullName>
                <Date>28 Jun 2020</Date>
                <ShareIconContainer
                    onClick={share}
                    style={{ gridArea: 'shareicon' }}
                >
                    <ShareIcon src={shareIcon} />
                </ShareIconContainer>
            </NonActiveState>
            <ActiveState isStateActive={showShare}>
                <ShareText>SHARE</ShareText>
                <SocialMediaContainer>
                    <SocialMedia src={facebookIcon} />
                    <SocialMedia src={twitterIcon} />
                    <SocialMedia src={pinterestIcon} />
                </SocialMediaContainer>
                <ActiveShareIconContainer
                    onClick={share}
                    isStateActive={showShare}
                >
                    <ActiveShareIcon />
                </ActiveShareIconContainer>
            </ActiveState>
        </MetaContainer>
    );
};

export default Meta;
