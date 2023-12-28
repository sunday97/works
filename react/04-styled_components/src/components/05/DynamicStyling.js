import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  ${Button} {
    margin: 10px;
  }
`;

// HTML태그의 속성들은 표준속성과 비표준속성으로 나눠진다.
// props가 dom으로 날라가는데 비표준속성이 가면 오류를 일으킴
// => prefix`$`붙여줘서 dom으로 보내지 않고 처리 + 가독성 상승 + 브라우저자체지원비표준속성과 충돌방지
function DynamicStyling() {
  return (
    <Container>
      <h1>기본버튼</h1>
      {/* <Button style={{ fontSize: "50px" }}>small</Button> */}
      <Button size="small">small</Button>
      <Button size="medium">medium</Button>
      <Button size="large">large</Button>
      <h1>둥근버튼</h1>
      <Button size="small" $round>
        round small
      </Button>
      <Button size="medium" $round>
        round medium
      </Button>
      <Button size="large" $round>
        round large
      </Button>
    </Container>
  );
}

export default DynamicStyling;
