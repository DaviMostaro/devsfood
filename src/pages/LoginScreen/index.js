import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import { Container, LoginForm, LoginInput, LoginButton } from './styled';
import { Link } from 'react-router-dom';

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const json = await api.login(email, password);
        console.log(json);
        if (json.result.token) {
            localStorage.setItem('token', json.result.token); // Salva o token no localStorage
            dispatch({ type: 'SET_TOKEN', payload: { token: json.result.token } });
            navigate('/');
        } else {
            alert('Email ou senha inválidos!');
        }
    };

    return (
        <Container>
            <h1>Login</h1>
            <LoginForm onSubmit={handleLogin}>
                <LoginInput
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <LoginInput
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <LoginButton type="submit">Entrar</LoginButton>
            </LoginForm>
            <Link style={{ textDecoration: 'none', marginTop: '10px', display: 'inline-block' }} to="/register">Não tem uma conta? Crie uma!</Link>
        </Container>
    );
};