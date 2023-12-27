import styled from "styled-components";
import nailImg from "./nail.png";

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

// Nesting 문법
// & => 부모선택자, 자기 자신 같은 뜻
// StyledComponent 안에선 가 ${} 컴포넌트선택자로 불림
const StyledButton = styled.button`
  background-color: #6750a4;
  border: none;
  color: #fff;
  padding: 16px;

  &:hover,
  &:active {
    background-color: #463770;

    ${Icon} {
      opacity: 0.3;
    }
  }

  & ${Icon} {
    margin-right: 4px;
  }
`;
function Button({ children }) {
  return (
    <StyledButton>
      <Icon src={nailImg} alt="nail icon" />
      {children}
    </StyledButton>
  );
}

export default Button;
