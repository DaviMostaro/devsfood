import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import { Container, RegisterForm, RegisterInput, RegisterButton } from './styled';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';


export default () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = async (e) => {
        e.preventDefault();
        const json = await api.register(name, email, password);
        console.log(json);
        if (json.result.token) {
            localStorage.setItem('token', json.result.token); 
            dispatch({ type: 'SET_TOKEN', payload: { token: json.result.token } });
            alert('Cadastro realizado com sucesso!');
            navigate('/');
        } else {
            alert('Erro ao cadastrar. Tente novamente.');
        }
    };

    return (
        <Container>
            <h1>Cadastro</h1>
            <RegisterForm onSubmit={handleRegister}>
                <RegisterInput
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <RegisterInput
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <RegisterInput
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <RegisterButton type="submit">Cadastrar</RegisterButton>
            </RegisterForm>
            <Link style={{ textDecoration: 'none', marginTop: '10px', display: 'inline-block' }} to="/login">Tem uma conta? Entre!</Link>
        </Container>
    );
};