import React from 'react';
import styled from 'styled-components';

const WebpurpleStampIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd"><circle fill="#E62270" cx="12" cy="12" r="12" />
            <g fill="#FFF">
                <path d="M15.484 18.378l.012-11.858 3.32 1.972-.011 7.913z" />
                <path d="M5.521 16.405l3.32 1.973 3.323-1.973 3.32 1.973 3.32-1.973-6.64-3.948z" />
                <path opacity=".4" style={{ mixBlendMode: "multiply" }} d="M8.841 18.378l3.323-5.92-6.643 3.947z" />
                <path d="M5.521 16.405l.037-7.913 3.32-1.972-.037 11.858z" />
            </g>
        </g>
    </svg>
);

export default styled(WebpurpleStampIcon) `
    display: inline-block;
    height: 2.4rem;
    width: 2.4rem;
`;
