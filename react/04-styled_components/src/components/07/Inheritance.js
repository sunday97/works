import styled from "styled-components";
import Button from "./Button";
import TermsOfService from "./TermsOfService";

const StyledTermsOfService = styled(TermsOfService)`
  background-color: #ededed;
  border-radius: 8px;
  padding: 16px;
  margin: 40px auto;
  width: 400px;
`;

// 상속 : 새로운 컴포넌트를 만들 때 부모역활을 가져와서 그 값을 이용하여 만든다.
// nesting은 그 구조 안에 컴포넌트를 불러와서 컴포넌트가 가지고 있던 css에 추가로 적용하는 것이다.
const SubmitButton = styled(Button)`
  background-color: #de117d;
  display: block;
  margin: 0 auto;
  width: 200px;

  &:hover {
    background-color: #f5070f;
  }
`;

function Inheritance() {
  return (
    <div>
      <StyledTermsOfService />
      <SubmitButton>계속하기</SubmitButton>
    </div>
  );
}

export default Inheritance;
