import React from 'react';
import Button from '../components/Button/Button';
import { useDispatch } from 'react-redux';
import { startApp } from '../reducers/startReducer';
import styled from 'styled-components';
import gsap from 'gsap';
import { Desktop, Mobile } from '../styles/Responsive';

const Container = styled.div`
    background-color: var(--yellow);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    position: fixed;
`;
const LogoImage = styled.img`
    width: min(100%, 300px);
`;

const Start = () => {
    const dispatch = useDispatch();
    const containerRef = React.useRef();
    const containerTL = gsap.timeline();
    const [clicked, setClicked] = React.useState(false);

    const handleClick = (e) => {
        if (clicked) return;

        setTimeout(() => {
            containerTL
                .to(containerRef.current, { scale: 1.2, y: 60 })
                .to(containerRef.current, { scale: 1, y: -1000 });
            setTimeout(() => {
                dispatch(startApp());
            }, 2000);
        }, 500);
        setClicked(true);
    };

    return (
        <Container ref={containerRef}>
            <LogoImage src="/images/pokedoro.png" />
            <Button click={handleClick}>Press Start</Button>
        </Container>
    );
};

export default Start;
