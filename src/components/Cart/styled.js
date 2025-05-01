import styled from "styled-components";

export const CartArea = styled.div`
    background-color: #136713;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: fixed;
    bottom: 0;
    right: 30px;
`;

export const CartHeader = styled.div`
    width: 290px;
    height: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const CartIcon = styled.img`
    width: 23px;
    height: auto;
    margin-left: 10px;
    margin-right: 10px;
`;

export const CartText = styled.div`
    flex: 1;
    color: #FFF;
    font-size: 17px;
`;

export const CartBody = styled.div`
    display: ${props=>props.show ? 'block' : 'none'};
    color: #FFF;
`;

export const ProductsArea = styled.div`

`;

export const ProductItem = styled.div`
    display: flex;
    margin: 10px;
`;

export const ProductPhoto = styled.img`
    width: 64px;
    height: auto;
    border-radius: 10px;
`;

export const ProductInfoArea = styled.div`
    flex: 1;
    margin-left: 10px;
`;

export const ProductName = styled.div`
    font-size: 15px;
    font-weight: bold;
`;

export const ProductPrice = styled.div`
    font-size: 13px;
`;

export const ProductQuantityArea = styled.div`
    display: flex;
    align-items: center;
`;

export const ProductQtIcon = styled.img`
    width: 13px;
    height: auto;
`;

export const ProductQtText = styled.div`
    font-size: 13px;
    font-weight: bold;
    margin: 0px 5px;
`;

export const AddAdressButton = styled.div`
    background-color: #136713;
    color: #FFF;
    font-size: 15px;
    font-weight: bold;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    margin: 10px 10px 20px 10px;
    cursor: pointer;

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
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 400px;
`;

export const AdressTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #136713;
`;

export const AddAdressArea = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`;

export const AddAdressInput = styled.input`
    border: 1px solid #CCC;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
`;

export const FinishArea = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`;

export const AdressArea = styled.div`
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const AdressText = styled.div`
    font-size: 13px;
`;

export const CupomArea = styled.div`
    display: flex;
    align-items: center;
`;

export const CupomInput = styled.input`
    border: 1px solid #CCC;
    padding: 10px;
    border-radius: 5px;
    margin-right: 10px;
`;
export const CupomButton = styled.div`
    background-color: #FFF;
    color: #136713;
    font-size: 15px;
    font-weight: bold;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
`;

export const PreviewArea = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`;
export const PreviewText = styled.div`
    font-size: 15px;
    font-weight: bold;
`;

export const FinishButton = styled.div`
    background-color: #FFF;
    color: #136713;
    font-size: 15px;
    font-weight: bold;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
`;



