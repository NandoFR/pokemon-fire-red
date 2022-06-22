import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(180deg, #e7f6ef 44.15%, #418c83 100%);
    display: grid;
    place-items: center;
`;
export const Center = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
export const Oak = styled.img`
    width: 150px;
`;
export const Pokeball = styled.img`
    position: absolute;
    width: 40px;
    bottom: 45%;
    display: none;
`;
export const Pikachu = styled.img`
    position: absolute;
    top: 58%;
    left: -10px;
    width: 100px;
    display: none;
`;
export const Girl = styled.img`
    width: 94px;
`;
export const Boy = styled.img`
    width: 80px;
`;
export const Character = styled.img`
    display: none;
    width: ${(props) => (props.gender === 'boy' ? '80px' : '94px')};
`;

export const BoyAndGirl = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    gap: 60px;
    position: absolute;
    inset: 0;
    z-index: 10;
`;
export const BoyAndGirlColumn = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    min-height: 200px;
    gap: 20px;
    button {
        font-size: 20px;
    }
`;
export const Whitescreen = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    z-index: 555;
    display: none;
`;

export const Pichu = styled.img`
    width: 50px;
    position: absolute;
    bottom: 0px;
    left: -30px;
    z-index: 10;
    display: none;
`;
