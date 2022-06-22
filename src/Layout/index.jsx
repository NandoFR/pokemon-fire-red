import React from 'react';
import styled from 'styled-components';
import { Desktop, Tablet } from '../styles/Responsive';

const Container = styled.div`
    ${Desktop({
        maxWidth: '800px',
        margin: '0 auto',
        marginTop: '100px',
        maxHeight: '800px',
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
    })}
    ${Tablet({
        maxWidth: '800px',
        margin: '0 auto',
        marginTop: '100px',
        maxHeight: '800px',
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
    })}
`;

const Layout = ({ children }) => {
    return <Container>{children}</Container>;
};

export default Layout;
