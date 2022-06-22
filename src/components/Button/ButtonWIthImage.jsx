import React from 'react';
import styled from 'styled-components';

const MusicPressA = new Audio('/sounds/pressA.mp3');

const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;

    img {
        width: 30px;
    }
`;

const ButtonWithImage = ({ text, image, click }) => {
    return (
        <>
            <Container
                onClick={() => {
                    MusicPressA.play();
                    click();
                }}
            >
                <img src={image} />
                <span>{text}</span>
            </Container>
        </>
    );
};

export default ButtonWithImage;
