import styled from "styled-components";
import Button from "./Button";

const KakaoButtton = styled(Button)`
  background-color: yellow;
  color: #000;

  &:hover,
  &:active {
    font-weight: bold;
  }
`;

export default KakaoButtton;
