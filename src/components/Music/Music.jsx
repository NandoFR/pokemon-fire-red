import React from 'react';
import { useSelector } from 'react-redux';

const Music = () => {
    const track = useSelector((state) => state.music.track);
    const isPlaying = useSelector((state) => state.music.isPlaying);
    const volume = useSelector((state) => state.music.volume);

    React.useEffect(() => {
        const audioEl = document.getElementById('globalMusic');
        if (track) {
            if (isPlaying) {
                audioEl.play();
            } else {
                audioEl.pause();
            }
        }
    }, [isPlaying]);

    React.useEffect(() => {
        const audioEl = document.getElementById('globalMusic');
        audioEl.volume = volume;
    }, [volume]);

    return <audio loop id="globalMusic" src={track || ''}></audio>;
};

export default Music;
