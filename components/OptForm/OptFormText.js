import React from "react";
import styled from "styled-components";


function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
}

export const Text = styled.p`
  font-size: 19px;
  color: #fff;
  text-align: center;
  padding: 0 20px;
`;

export default OptFormText;
