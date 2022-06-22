import { css } from 'styled-components';

export const Mobile = (props) => {
    return css`
        @media only screen and (min-width: 380px) {
            ${props}
        }
    `;
};

export const Tablet = (props) => {
    return css`
        @media only screen and (min-width: 768px) {
            ${props}
        }
    `;
};

export const Desktop = (props) => {
    return css`
        @media only screen and (min-width: 1024px) {
            ${props}
        }
    `;
};
