import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';
import { useSelector } from 'react-redux';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import OrdersScreen from './pages/OrdersScreen';
import ProfileScreen from './pages/ProfileScreen';

import { Container, Menu, PageBody } from './AppStyled';

import MenuItem from './components/MenuItem';
import PrivateRoute from './components/PrivateRoute';
import Cart from './components/Cart';

function App() {
  const name = useSelector(state => state.user.name);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route
          path="*"
          element={
            <Container>
              <Menu>
                <MenuItem title="Loja" icon="/assets/store.png" link="/" />
                <MenuItem title="Pedidos" icon="/assets/order.png" link="/orders" />
                <MenuItem title="Meu Perfil" icon="/assets/profile.png" link="/profile" />
              </Menu>
              <PageBody>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <PrivateRoute element={<HomeScreen />} />
                        <Cart /> 
                      </>
                    }
                  />
                  <Route path="/orders" element={<PrivateRoute element={<OrdersScreen />} />} />
                  <Route path="/profile" element={<PrivateRoute element={<ProfileScreen />} />} />
                  <Route path="/tela2/:nome" element={<Tela2Screen />} />
                  <Route path="*" element={<div>Página não encontrada</div>} />
                </Routes>
              </PageBody>
            </Container>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;