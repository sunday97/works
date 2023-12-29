import styled from "styled-components";
import Button from "./Button";
import kakaoImg from "./kakao.svg";

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fee500;
  color: rgba(0, 0, 0, 0.8);

  /* nest구조 */
  ${Icon} {
    margin-right: 8px;
  }

  &:hover,
  &:active {
    background-color: #fff280;
  }
`;

function KakaoButton() {
  return (
    <StyledButton>
      <Icon src={kakaoImg} alt="카카오이미지" />
      카카오 로그인
    </StyledButton>
  );
}

export default KakaoButton;
