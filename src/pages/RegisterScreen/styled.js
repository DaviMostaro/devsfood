import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95vh;
  background-color: #f0f0f0;
  border-radius: 20px;
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const RegisterInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const RegisterButton = styled.button`
  padding: 10px;
  background-color: #136713;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #FFF;
    color: #136713;
  }
`;