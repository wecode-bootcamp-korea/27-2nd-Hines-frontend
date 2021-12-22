import React from 'react';
import styled from 'styled-components';

const { Kakao } = window;

const kakaoLoginClickHandler = () => {
  Kakao.Auth.login({
    success: function (authobj) {
      // http://10.58.4.105:8000/users
      fetch('http://10.58.4.105:8000/users', {
        method: 'POST',
        headers: {
          Authorization: authobj.access_token,
        },
      })
        .then(res => res.json())
        .then(data =>
          data.message === 'SUCCESS'
            ? sessionStorage.setItem('hines_token', data.Authorization)
            : alert(data.message)
        );
    },
  });
};

function Login() {
  return (
    <LoginBg>
      <LoginContainer>
        <HinesLogo src="/images/symbolbk.png" />
        <LoginBtn>
          <LoginBtnText>&nbsp;&nbsp;&nbsp; 로그인하기</LoginBtnText>
        </LoginBtn>
        <KakaoLoginBtn onClick={kakaoLoginClickHandler}>
          <KakaoLoginBtnImg src="/images/kakao_login_medium_wide.png" />
        </KakaoLoginBtn>
        <NaverLoginBtn>
          <NaverLoginBtnImg src="/images/naverlog.png" />
        </NaverLoginBtn>
        <LoginFooter>© 2021 Hines from Meta </LoginFooter>
      </LoginContainer>
    </LoginBg>
  );
}

const LoginBg = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
  width: 350px;
  height: 500px;
  padding: 20px;
  text-align: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const HinesLogo = styled.img`
  width: 200px;
  margin: 80px 30px 160px 30px;
`;

const LoginBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7px;
`;

const LoginBtnText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 45px;
  background-color: #3d3a3a;
  color: #f0eded;
  line-height: center;
  border-radius: 5px;
  font-weight: bold;
  font-size: 15px;
`;

const KakaoLoginBtn = styled.div`
  margin: 5px;
`;

const KakaoLoginBtnImg = styled.img``;

const NaverLoginBtn = styled.div`
  margin: 5px;
`;

const NaverLoginBtnImg = styled.img`
  width: 300px;
  height: 45px;
`;

const LoginFooter = styled.div`
  margin-top: 20px;
  font-size: 13px;
  color: #a6a4a4;
`;

export default Login;
