import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { muteMusic, volumeMusic } from '../../reducers/musicReducer';
const SoundPressA = new Audio('/sounds/pressA.mp3');

import styled from 'styled-components';

const Container = styled.button`
    border-radius: 50%;
    padding: 8px 12px;
    position: absolute;
    top: 20px;
    left: 20px;
`;

const MuteButton = () => {
    const volume = useSelector((state) => state.music.volume);
    const dispatch = useDispatch();
    const handleClick = () => {
        SoundPressA.play();
        if (!!volume) {
            dispatch(muteMusic());
        } else {
            dispatch(volumeMusic(1));
        }
    };

    return (
        <Container onClick={handleClick}>
            {!!volume ? (
                <i className="fa-solid fa-volume-high"></i>
            ) : (
                <i className="fa-solid fa-volume-xmark"></i>
            )}
        </Container>
    );
};

export default MuteButton;
