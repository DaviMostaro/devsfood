import React, {useState, useEffect} from 'react';
import {Container, ProfileTitle, ProfileInput, ProfileText, ProfileButton, ModalOverlay, ModalContent  } from './styled';
import api from '../../api';


export default () => {
    const [user, setUser] = useState({
        name: '',
        email: ''
    });
    const [showModal, setShowModal] = useState(false);

    const [updatedName, setUpdatedName] = useState('');
    const [updatedEmail, setUpdatedEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token'); 
            if (token) {
                const json = await api.getUser(token);
                console.log(json);
                const name = json.result.user.name;
                const email = json.result.user.email;
                setUser({ name, email });
            }
        };

        fetchUserData();
    }, []);

    const handleOpenModal = () => {
        setUpdatedName(user.name);
        setUpdatedEmail(user.email);
        setShowModal(true);
    };

    const handleEdit = async () => {
        const token = localStorage.getItem('token');
        const response = await api.updateUser(token, updatedName, updatedEmail, newPassword, confirmPassword);
        if (response.error === '') {
            alert('Dados atualizados com sucesso!');
            setUser({ name: updatedName, email: updatedEmail });
            setShowModal(false);
        } else {
            alert('Erro ao atualizar os dados: ' + response.error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }

    return (
        <Container>
            <ProfileTitle>Dados do usuário</ProfileTitle>
            <ProfileText>Nome:</ProfileText>
            <ProfileInput value={user.name} disabled />
            <ProfileText>Email:</ProfileText>
            <ProfileInput value={user.email} disabled />
            <ProfileButton onClick={handleOpenModal}>Editar Dados</ProfileButton>
            <ProfileButton onClick={handleLogout}>Sair</ProfileButton>

            {showModal && 
                <ModalOverlay>
                    <ModalContent>
                        <ProfileTitle>Editar Dados</ProfileTitle>
                        <ProfileText>Novo Nome:</ProfileText>
                        <ProfileInput
                            placeholder='Digite seu novo nome'
                            value={updatedName}
                            onChange={(e) => setUpdatedName(e.target.value)}
                        />
                        <ProfileText>Novo Email:</ProfileText>
                        <ProfileInput
                            placeholder='Digite seu novo email'
                            value={updatedEmail}
                            onChange={(e) => setUpdatedEmail(e.target.value)}
                        />
                        <ProfileText>Nova Senha:</ProfileText>
                        <ProfileInput
                            placeholder='Digite sua nova senha'
                            type='password'
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <ProfileText>Confirme sua Senha:</ProfileText>
                        <ProfileInput
                            placeholder='Confirme sua nova senha'
                            type='password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <ProfileButton onClick={handleEdit}>Salvar</ProfileButton>
                    </ModalContent>
                </ModalOverlay>
            }
        </Container>
    );
};