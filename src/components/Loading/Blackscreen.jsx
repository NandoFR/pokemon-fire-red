import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--body);
    z-index: 5555;
`;

export const blackscreenRef = React.createRef();
const Blackscreen = () => {
    return <Container ref={blackscreenRef} />;
};

export default Blackscreen;
