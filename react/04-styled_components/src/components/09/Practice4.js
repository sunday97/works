import styled from "styled-components";
import Input from "./Input";
import SearchInput from "./SearchInput";
import SearchImg from "./search.png";

const Container = styled.div`
  position: relative;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

function Practice4() {
  return (
    <Container>
      {/* <Icon src={SearchImg} alt="SearchImg" /> */}
      <h2>Input</h2>
      <Input />
      <h2>Search Input</h2>
      <SearchInput />
    </Container>
  );
}

export default Practice4;
