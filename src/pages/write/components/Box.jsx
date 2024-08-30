import React from "react";
import styled from "styled-components";

const BoxDiv = styled.div`
  width: fit-content;
  display: flex;
  justify-content: right;
  padding: 15px 0;
`;

const Box = ({ children }) => {
  return <BoxDiv>{children} </BoxDiv>;
};

export default Box;
