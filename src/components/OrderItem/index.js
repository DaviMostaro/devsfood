import React, { useState } from 'react';
import {
    OrderBox,
    OrderInfo,
    OrderTitle,
    OrderProduct,
    OrderTotal,
    StatusText,
    ButtonArea,
    Button
} from './styled';

export default ({ order, index, onExclude }) => {
    const [status, setStatus] = useState("Em andamento");

    return (
        <OrderBox>
            <OrderTitle>Pedido #{index + 1}</OrderTitle>
            <OrderInfo>
                <strong>Endereço:</strong><br />
                {order.adress.street}, {order.adress.number}<br />
                {order.adress.complement && `${order.adress.complement}, `}
                {order.adress.city}
            </OrderInfo>
            <OrderInfo>
                <strong>Produtos:</strong>
                {order.products.map((product, i) => (
                    <OrderProduct key={i}>
                        {product.qt}x {product.name} - R$ {(product.price * product.qt).toFixed(2)}
                    </OrderProduct>
                ))}
            </OrderInfo>
            <OrderTotal><strong>Total:</strong> R$ {order.total.toFixed(2)}</OrderTotal>
            <StatusText>Status: {status}</StatusText>
            <ButtonArea>
                <Button onClick={() => setStatus("Finalizado")}>Confirmar Entrega</Button>
                <Button onClick={onExclude}>Excluir pedido</Button>
            </ButtonArea>
        </OrderBox>
    );
};
