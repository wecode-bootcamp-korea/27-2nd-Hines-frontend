import React from 'react';
import styled from 'styled-components';

const { Kakao } = window;

const kakaoLoginClickHandler = () => {
  Kakao.Auth.login({
    // <고급 팝업방식으로 로그인>
    // 카카오 로그인 동의 화면을 팝업으로 띄우거나 클라이언트에서 모든 인증 처리를 하고 싶은 경우 Kakao.Auth.login 함수를 사용할 수 있다.
    // 클릭 이벤트 핸들러에서 함수를 호출하면 카카오 로그인 동의 화면을 띄울 수 있으며, 동의 화면을 통해 사용자로부터
    // 사용자 정보 및 기능 활용 동의를 받을 수 있다.
    // 함수 호출 시 팝업으로 카카오 로그인 동의 화면이 표시된다.
    // 로그인 요청 결과 토근이 발급되며 이 토큰은 SDK 내부적으로 사용되고 있기 때문에 별도의 처리가 필요하지 않습니다.

    // 로그인 성공시 서비스의 로그인 및 회원가입 처리가 필요하다.
    // 인증 성공시 서비스의 로그인 처리는 success 콜백 함수를 사용해야 한다.

    success: function (authobj) {
      // 로그인이 성공할 경우 토큰을 받을 콜백함수 success
      console.log(authobj);

      // 토큰을 카카오에서 발급 받고
      // 고소당함...
      // 그래서 백엔드에게 토큰을 보내고 이 토큰을 백엔드가 유저 정보만 쏙 빼서
      // 다시 우리만의 토큰으로 재가공 후 프론트로 돌려준다.
      fetch('http://10.58.4.105:8000/users', {
        method: 'POST',
        body: JSON.stringify({
          token: authobj.access_token, // 키 값 맞춰야함
        }),
      })
        .then(res => res.json())
        .catch(error => console.log(error));
      // .then(data =>
      //   data.message === 'SUCCESS'
      //     ? localStorage.setItem('token', data.token)
      //     : console.log(data.message)
      // )
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
