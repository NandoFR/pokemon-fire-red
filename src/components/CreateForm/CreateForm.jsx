import React from 'react';
import styled from 'styled-components';
import useUpdateEffect from '../../hooks/useUpdateEffect';
import Button from '../Button/Button';

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    display: ${(props) => (props.open ? 'flex' : 'none')};
    transition: 100ms;
    z-index: 555;
    flex-direction: column;
    background-image: url('/images/form-background.png');
    background-size: cover;
`;
const Topbar = styled.div`
    width: 100%;
    padding: 20px;
    background-color: var(--hardBlue);
    margin-bottom: 60px;
`;

const Box = styled.div`
    border-radius: 16px;
    border: 2px solid var(--blue);
    background-color: #eee;
    display: flex;
    padding: 20px;
    gap: 20px;
    width: min(90%, 500px);
    margin: 0 auto;
`;

const Sprite = styled.img`
    width: 78px;
    object-fit: contain;
`;

const BoxContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
    flex: 2;
`;

const Title = styled.h3``;

const Input = styled.input`
    border: none;
    border-radius: 16px;
    padding: 4px 10px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    width: 200px;
`;

const CreateForm = ({ open, gender, callback, name, setName }) => {
    const SoundMenu = new Audio('/sounds/menu.mp3');
    useUpdateEffect(() => {
        SoundMenu.play();
    }, [open]);
    return (
        <>
            <Container open={open}>
                <Topbar />
                <Box>
                    <Sprite
                        src={
                            gender === 'boy'
                                ? '/images/boy2.png'
                                : '/images/girl2.png'
                        }
                    />
                    <BoxContent>
                        <Title>Your Name?</Title>
                        <Input
                            value={name}
                            maxLength="12"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Button
                            disabled={!name ? true : false}
                            click={callback}
                        >
                            Confirm
                        </Button>
                    </BoxContent>
                </Box>
            </Container>
        </>
    );
};

export default CreateForm;
