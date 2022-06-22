import React from 'react';

import styled from 'styled-components';
const MusicPressA = new Audio('/sounds/pressA.mp3');

const Container = styled.button``;

const Button = ({ children, click = () => {}, disabled }) => {
    const playSound = () => {
        MusicPressA.play();
        click();
    };
    return (
        <Container disabled={disabled} onClick={playSound}>
            {children}
        </Container>
    );
};

export default Button;
