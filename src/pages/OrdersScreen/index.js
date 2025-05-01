import React from 'react';
import { Container, OrdersTitle, OrdersArea, Text } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import OrderItem from '../../components/OrderItem';

export default () => {
    const orders = useSelector(state => state.orders.orders);
    const dispatch = useDispatch();

    const handleExcludeOrder = (index) => {
        dispatch({ type: 'REMOVE_ORDER', payload: index });
    };

    return (
        <Container>
            <OrdersTitle>Meus Pedidos</OrdersTitle>
            <OrdersArea>
                {orders.length === 0 && <Text>Você ainda não fez nenhum pedido.</Text>}
                {orders.map((order, index) => (
                    <OrderItem
                        key={index}
                        order={order}
                        index={index}
                        onExclude={() => handleExcludeOrder(index)}
                    />
                ))}
            </OrdersArea>
        </Container>
    );
};
