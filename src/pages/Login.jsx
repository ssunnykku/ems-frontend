import styled from 'styled-components';
import RoundButton from '../components/RoundButton';
import InputBasic from '../components/InputBasic';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import * as Api from '../utils/api.js';

const Login = () => {
  const [hrdNetId, setHrdNetId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // sessionStorage.setItem('userToken', jwtToken);

  useEffect(() => {}, []);

  const loginAction = () => {
    Api.post('students/login', {
      hrdNetId: hrdNetId,
      password: password,
    }).then(() => {
      navigate('/myPage');
    });
  };

  return (
    <LoginPageWrapper>
      <Link to="/">
        <LogoWrapper>
          <LogoImgWrapper>
            <LogoImg src="#" />
          </LogoImgWrapper>
        </LogoWrapper>
      </Link>
      <LoginForm>
        <InputTagWrapper>
          <InputBasic
            text="HrdNetId"
            type={'hrdNetId'}
            value={hrdNetId}
            onChange={(event) => {
              setHrdNetId(event.target.value);
            }}
          />
          <InputBasic
            text="Password"
            type={'password'}
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </InputTagWrapper>
        <LoginBtnWrapper>
          <RoundButton
            text={'Log in'}
            type={'primary'}
            action={() => {
              loginAction();
            }}
          />
        </LoginBtnWrapper>
      </LoginForm>
    </LoginPageWrapper>
  );
};

export default Login;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LogoImgWrapper = styled.div`
  display: flex;
  max-width: 100%;
  max-height: 40vh;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

const LogoImg = styled.img`
  width: 100%;
  max-width: 500px;
  max-height: 500px;
  aspect-ratio: 1;
`;

const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  padding: 1.2rem;
`;

const LoginForm = styled.div`
  width: 100%;
  min-height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4rem;
`;

const LoginBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
`;

const InputTagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
