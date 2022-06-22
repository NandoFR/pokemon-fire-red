import React from 'react';
import Dialog, { dialogRef } from '../../components/Dialog/Dialog';
import gsap from 'gsap';
import { useDispatch, useSelector } from 'react-redux';
import {
    pauseMusic,
    playMusic,
    setMusic,
    volumeMusic,
} from '../../reducers/musicReducer';
import { createCharacter } from '../../reducers/userReducer';
import MuteButton from '../../components/Button/MuteButton';
import CreateForm from '../../components/CreateForm/CreateForm';
import Button from '../../components/Button/Button';
import * as S from './styles';

const CreateCharacter = () => {
    const SoundPikachuCry = new Audio('/sounds/pikachuCry.mp3');
    const containerRef = React.useRef();
    const pokeballRef = React.useRef();
    const pikachuRef = React.useRef();
    const oakRef = React.useRef();
    const boyAndGirlRef = React.useRef();
    const whitescreenRef = React.useRef();
    const characterRef = React.useRef();
    const pichuRef = React.useRef();

    const tl = gsap.timeline();
    const tl2 = gsap.timeline();

    let volume = useSelector((state) => state.music.volume);
    const dispatch = useDispatch();

    const [phraseIndex, setPhraseIndex] = React.useState(0);
    const [canWrite, setCanWrite] = React.useState(false);
    const [openForm, setOpenForm] = React.useState(false);
    const [gender, setGender] = React.useState(false);
    const [name, setName] = React.useState('');

    React.useEffect(() => {
        (async () => {
            dispatch(setMusic('/music/welcome.mp3'));
            dispatch(playMusic());
            await tl
                .from(containerRef.current, { opacity: 0, duration: 3 })
                .to(containerRef.current, { opacity: 1 })
                .set(dialogRef.current, { scale: 0, display: 'block' })
                .to(dialogRef.current, { scale: 1 });
            setCanWrite(true);
        })();
    }, []);

    const phrases = [
        {
            text: [
                'Hello, There! Glad to meet you!',
                'Welcome to the world of POKÉMON!',
                'My name is OAK.',
                'People affectionately refer to me as the POKÉMON PROFESSOR.',
                'This world...',
            ],
            callback: async () => {
                setCanWrite(false);
                setPhraseIndex(phraseIndex + 1);
                await tl
                    .set(pokeballRef.current, {
                        display: 'block',
                        scale: 0,
                    })
                    .fromTo(pokeballRef.current, { scale: 0 }, { scale: 1 });

                tl.set(whitescreenRef.current, {
                    display: 'block',
                    opacity: 0,
                })
                    .fromTo(
                        whitescreenRef.current,
                        { opacity: 0 },
                        { opacity: 0.9 }
                    )
                    .to(whitescreenRef.current, {
                        opacity: 0,
                        display: 'none',
                    });
                SoundPikachuCry.play();
                setTimeout(async () => {
                    await tl2
                        .set(pikachuRef.current, { display: 'block' })
                        .fromTo(
                            pikachuRef.current,
                            {
                                scale: 0.5,
                                y: -100,
                                x: -50,
                            },
                            { scale: 1, y: 0, x: 0 }
                        );
                }, 300);

                await tl.to(pokeballRef.current, {
                    scale: 0,
                });

                setCanWrite(true);
            },
        },
        {
            text: [
                '...is inhabited far and wide by creatures called POKÉMON.',
                'For some people, POKÉMON are pets. Others use them for battling.',
                'As for myself...',
                'I study POKÉMON as a profession.',
            ],
            callback: async () => {
                setCanWrite(false);
                setPhraseIndex(phraseIndex + 1);
                await tl.to(pokeballRef.current, { scale: 1 });
                await tl.to(whitescreenRef.current, {
                    display: 'block',
                });
                tl.set(whitescreenRef.current, {
                    display: 'block',
                    opacity: 0,
                })
                    .fromTo(
                        whitescreenRef.current,
                        { opacity: 0 },
                        { opacity: 0.9 }
                    )
                    .to(whitescreenRef.current, {
                        opacity: 0,
                        display: 'none',
                    });
                SoundPikachuCry.play();
                setTimeout(async () => {
                    await tl2
                        .set(pikachuRef.current, { display: 'block' })
                        .fromTo(
                            pikachuRef.current,
                            { scale: 1, y: 0, x: 0 },
                            {
                                scale: 0,
                                y: -100,
                                x: -20,
                            }
                        );
                }, 300);
                await tl.to(pokeballRef.current, {
                    scale: 0,
                });
                setCanWrite(true);
            },
        },
        {
            text: [
                'But first, tell me a little about yourself.',
                'Now tell me. Are you a boy? Or are you a girl?',
            ],
            callback: async () => {
                setCanWrite(false);
                await tl.to(oakRef.current, {
                    opacity: 0,
                    duration: 1.5,
                    display: 'none',
                });

                await tl
                    .to(dialogRef.current, { scale: 0 })
                    .set(boyAndGirlRef.current, { opacity: 0, display: 'flex' })
                    .to(boyAndGirlRef.current, { opacity: 1 });
            },
        },
        {
            text: ["Let's begin with your name. What is it?"],
            callback: () => {
                setCanWrite(false);
                setOpenForm(true);
            },
        },
        {
            text: [
                `${name}!`,
                'Your very own POKÉMON legend is about to unfold!',
                'A world of dreams and adventures with POKÉMON awaits!',
                "Let's go!!!",
            ],
            callback: async () => {
                tl.to(containerRef.current, {
                    opacity: 0,
                    duration: 1.5,
                });
                const fadeOutMusic = setInterval(() => {
                    if (volume < 0.1) {
                        dispatch(pauseMusic());
                        dispatch(createCharacter({ name, gender }));
                        clearInterval(fadeOutMusic);

                        return;
                    }
                    dispatch(volumeMusic((volume -= 0.1)));
                }, 400);
            },
        },
    ];
    const boyAndGirlClick = async (gender) => {
        setGender(gender);
        setPhraseIndex(phraseIndex + 1);
        await tl
            .set(boyAndGirlRef.current, {
                opacity: 1,
                display: 'flex',
            })
            .to(boyAndGirlRef.current, {
                opacity: 0,
                duration: 1.5,
            })
            .fromTo(boyAndGirlRef.current, { zIndex: '10' }, { zIndex: '-10' });
        await tl2
            .set(characterRef.current, { display: 'block', opacity: 0 })
            .to(characterRef.current, { opacity: 1 })
            .delay(0.8);
        await tl.to(dialogRef.current, { scale: 1 });
        setCanWrite(true);
    };
    const formCallback = () => {
        setOpenForm(false);
        setPhraseIndex(phraseIndex + 1);
        setTimeout(() => {
            setCanWrite(true);
        }, 300);
    };
    return (
        <>
            <S.Whitescreen ref={whitescreenRef} />
            <CreateForm
                open={openForm}
                gender={gender || ''}
                name={name}
                setName={setName}
                callback={formCallback}
            />
            <S.Container ref={containerRef}>
                <MuteButton />
                <S.Center>
                    <S.Pichu ref={pichuRef} src="/images/pichu.png" />
                    <S.Character
                        ref={characterRef}
                        src={
                            gender === 'boy'
                                ? '/images/boy.png'
                                : '/images/girl.png'
                        }
                        gender={gender}
                    />
                    <S.BoyAndGirl ref={boyAndGirlRef}>
                        <S.BoyAndGirlColumn>
                            <S.Boy src="/images/boy.png" />
                            <Button click={() => boyAndGirlClick('boy')}>
                                Boy
                            </Button>
                        </S.BoyAndGirlColumn>
                        <S.BoyAndGirlColumn>
                            <S.Girl src="/images/girl.png" />
                            <Button click={() => boyAndGirlClick('girl')}>
                                Girl
                            </Button>
                        </S.BoyAndGirlColumn>
                    </S.BoyAndGirl>
                    <S.Pokeball ref={pokeballRef} src="/images/pokeball.png" />
                    <S.Oak ref={oakRef} src="/images/oak.png" />
                    <S.Pikachu
                        ref={pikachuRef}
                        src="/images/pikachu-male.png"
                    />
                </S.Center>
                <Dialog phrases={phrases[phraseIndex]} canWrite={canWrite} />
            </S.Container>
        </>
    );
};

export default CreateCharacter;
