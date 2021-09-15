import React from 'react';
import styled from 'styled-components';
import Icon from './BaseIconSvg';

const StyledSVG = styled(Icon)`
    width: 0.9375rem;
    height: 0.8125rem;
`;

export const ShareIconSvg = ({ className }) => (
    <StyledSVG width='15' height='13' className={className}>
        <path
            fill='currentColor'
            d='M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z'
        />
    </StyledSVG>
);
