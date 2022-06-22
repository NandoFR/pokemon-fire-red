import React from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
const tl = gsap.timeline();

const Container = styled.div`
    position: absolute;
    bottom: 30px;
    width: 300px;
    left: 50%;
    transform: translateX(-50%);
    min-height: 100px;
    i {
        display: none;
    }
`;

const Content = styled.p`
    width: 300px;
    min-height: 100px;
    padding: 12px;
    background-color: #fff;
    border: 4px solid var(--blue);
    border-radius: 16px;
    cursor: pointer;
    display: none;
    i {
        display: block;
    }
`;

const ArrowDown = styled.i`
    color: red;
    position: absolute;
    bottom: 15px;
    right: 5px;
`;

const SoundPressA = new Audio('/sounds/pressA.mp3');

export const dialogRef = React.createRef();
const Dialog = ({ phrases, canWrite }) => {
    const arrowDownRef = React.useRef();

    let textIndex = 0;
    let letterIndex = 0;
    let writing = false;
    let speed = 50;

    const write = () => {
        // Get the string of array
        let text = phrases.text[textIndex];
        // Get first letter of string
        let letter = text[letterIndex];
        // If letter is undefined, already write all text
        if (letter === undefined) {
            //Reset letterIndex for get the first letter of text
            letterIndex = 0;
            // Reset speed to normal
            speed = 50;
            // Inform that is no more writing
            writing = false;
            //show arrow
            dialogRef.current.appendChild(arrowDownRef.current);
            tl.fromTo(arrowDownRef.current, { y: 0 }, { y: 10 })
                .to(arrowDownRef.current, { y: 0 })
                .repeat(5);

            return;
        }
        //Add one letter to dialog component
        dialogRef.current.innerHTML += letter;
        //Increment index to get the next letter
        letterIndex++;
        //Inform that component still writing
        writing = true;
        //Repeat the process until has no more letter in text
        setTimeout(write, speed);
    };
    const handleClick = async () => {
        // if dialog has no text, disable click
        if (dialogRef.current.innerHTML === '') {
            return;
        }
        // When writing is true, the speed will increment for fast-forward the text
        if (writing) {
            speed = 10;
            return;
        }
        SoundPressA.play();
        // Reset the dialog text
        dialogRef.current.innerHTML = '';
        // If has no more text in the array, will close de dialog and call the callback
        if (!phrases.text[textIndex + 1]) {
            // reset the textIndex for get the first string of the new incoming array
            textIndex = 0;
            // after animation of closing modal is done, call the callback
            await phrases.callback();
            return;
        }
        // Increment the textIndex for get the next array
        textIndex++;
        // And write this next string
        write();
    };
    React.useEffect(() => {
        if (!canWrite) {
            return;
        }
        write();
    }, [canWrite]);

    return (
        <>
            <Container>
                <Content onClick={handleClick} ref={dialogRef}></Content>
                <ArrowDown
                    onClick={handleClick}
                    className="fa-solid fa-arrow-down"
                    ref={arrowDownRef}
                />
            </Container>
        </>
    );
};

export default Dialog;
