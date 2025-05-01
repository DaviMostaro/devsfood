import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    ModalOverlay, ModalContent, AdressTitle,
    FinishArea, FinishButton, AdressArea, AdressText, CupomArea, CupomInput, CupomButton, PreviewArea,
    AddAdressArea, AddAdressInput, AddAdressButton, CartArea, CartBody, CartHeader, CartIcon, CartText, ProductsArea, ProductItem, ProductPhoto, ProductInfoArea, ProductName, ProductPrice, ProductQuantityArea, ProductQtIcon, ProductQtText,
    PreviewText} from './styled';

export default () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.products);

    const [show, setShow] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showAdressButton, setShowAdressButton] = useState(true);
    const [adress, setAdress] = useState({
        street: '',
        number: '',
        complement: '',
        city: ''
    });
    const [adressSaved, setAdressSaved] = useState(false);
    const [cupom, setCupom] = useState(false);
    const [cupomInput, setCupomInput] = useState('');

    const handleAddCupom = (e) => {
        if (cupomInput === 'DESCONTO10') {
            setCupom(true);
            alert("Cupom aplicado com sucesso!");
        } else {
            alert("Cupom inválido!");
        }
    }

    const handleAddAdress = () => {
        if (!adress.street || !adress.number || !adress.city) {
            alert("Preencha todos os campos obrigatórios!");
            return;
        }
        if (adress.number <= 0) {
            alert("Número inválido!");
            return;
        }
        setShowAdressButton(false);
        setShowForm(false);
        setAdressSaved(true);
        alert("Endereço salvo com sucesso!");
    }

    const handleAdressClick = () => {
        setShowAdressButton(false);
        setShowForm(true);
    }

    const handleCartClick = () => {
        setShow(!show);
    }

    const handleProductChange = (key, type) => {
        dispatch({
            type: 'CHANGE_PRODUCT',
            payload: {
                key,
                type
            }
        })
    }

    const subtotal = products.reduce((acc, item) => acc + item.price * item.qt, 0);

    const handleFinishPurchase = () => {
        if(products.length === 0) {
            alert("Seu carrinho está vazio!");
            return;
        }

        dispatch({
            type: 'ADD_ORDER',
            payload: {
              products,
              adress,
              total: (subtotal - (cupom ? subtotal * 0.1 : 0))
            }
        });
        
        alert("Compra finalizada com sucesso!");
        dispatch({ type: 'CLEAR_CART' });
    }

    return (
        <CartArea>
            <CartHeader onClick={handleCartClick}>
                <CartIcon src="/assets/cart.png" />
                <CartText>Meu Carrinho ({products.length})</CartText>
                {show &&
                    <CartIcon src="/assets/down.png" />
                }     
            </CartHeader>
            <CartBody show={show}>
                {products.length === 0 &&
                    <ProductItem>
                        <ProductInfoArea>
                            <ProductName>Seu carrinho está vazio</ProductName>
                        </ProductInfoArea>
                    </ProductItem>
                }
                <ProductsArea>
                    {products.map((item, index) => (
                        <ProductItem key={index}>
                            <ProductPhoto src={item.image} />
                            <ProductInfoArea>
                                <ProductName>{item.name}</ProductName>
                                <ProductPrice>R$ {(item.qt * item.price.toFixed(2))}</ProductPrice>
                            </ProductInfoArea>
                            <ProductQuantityArea>
                                <ProductQtIcon 
                                    src="/assets/minus.png" 
                                    onClick={() => handleProductChange(index, '-')}
                                />
                                <ProductQtText>{item.qt}</ProductQtText>
                                <ProductQtIcon 
                                    src="/assets/plus.png" 
                                    onClick={() => handleProductChange(index, '+')}
                                />
                            </ProductQuantityArea>
                        </ProductItem>
                    ))}             
                </ProductsArea>

                {showAdressButton &&
                    <AddAdressButton onClick={handleAdressClick}>
                        Adicionar Endereço
                    </AddAdressButton>
                }       

                {showForm &&
                    <ModalOverlay>
                        <ModalContent>
                            <AddAdressArea>
                                <AdressTitle>Adicionar Endereço de Entrega</AdressTitle>
                                <AddAdressInput
                                    type="text" 
                                    placeholder="Rua" 
                                    value={adress.street} 
                                    onChange={(e) => setAdress({...adress, street: e.target.value})}
                                />
                                <AddAdressInput
                                    type="text" 
                                    placeholder="Número" 
                                    value={adress.number} 
                                    onChange={(e) => setAdress({...adress, number: e.target.value})}
                                />
                                <AddAdressInput
                                    type="text" 
                                    placeholder="Complemento" 
                                    value={adress.complement} 
                                    onChange={(e) => setAdress({...adress, complement: e.target.value})}
                                />
                                <AddAdressInput
                                    type="text" 
                                    placeholder="Cidade" 
                                    value={adress.city} 
                                    onChange={(e) => setAdress({...adress, city: e.target.value})}
                                />
                                <AddAdressButton onClick={handleAddAdress}>Salvar</AddAdressButton>
                            </AddAdressArea>
                        </ModalContent>
                    </ModalOverlay>
                }

                {adressSaved &&
                    <FinishArea>
                        <AdressArea>
                            Endereço de Entrega:
                            <AdressText>{adress.street}</AdressText>
                            <AdressText>{adress.number}</AdressText>
                            <AdressText>{adress.complement}</AdressText>
                            <AdressText>{adress.city}</AdressText>
                        </AdressArea>
                        <CupomArea>
                            <CupomInput 
                                type="text" 
                                placeholder="Cupom de desconto" 
                                value={cupomInput} 
                                onChange={(e) => setCupomInput(e.target.value)}
                            />
                            <CupomButton onClick={handleAddCupom}>Adicionar</CupomButton>
                        </CupomArea>
                        <PreviewArea>
                            <PreviewText>Subtotal: R$ {subtotal.toFixed(2)}</PreviewText>
                            <PreviewText>{cupom && `Desconto: R$ ${(subtotal * 0.1).toFixed(2)}`}</PreviewText>
                            <PreviewText>Total: R$ {(subtotal - (cupom ? subtotal * 0.1 : 0)).toFixed(2)}</PreviewText>
                        </PreviewArea>
                        <FinishButton onClick={handleFinishPurchase}>
                            Finalizar Compra
                        </FinishButton>
                    </FinishArea>
                }
                
            </CartBody>
        </CartArea>
    );
}