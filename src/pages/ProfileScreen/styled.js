import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    height: 60vh;
`;

export const ProfileTitle = styled.h1`
    font-size: 24px;
`;

export const ProfileText = styled.p`
    font-size: 18px;
    font-weight: bold;
`;

export const ProfileInput = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const ProfileButton = styled.button`
    padding: 10px;
    background-color: #136713;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        background-color: #FFF;
        color: #136713;
    }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 100vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
`;