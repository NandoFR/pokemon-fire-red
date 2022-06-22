import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    place-items: center;
    h2 {
        color: white;
    }
`;

const Home = () => {
    const name = useSelector((state) => state.user.name);
    return (
        <Container>
            <h2>Thanks {name}</h2>
        </Container>
    );
};

export default Home;
