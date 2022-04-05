import React from "react";
import styled from "styled-components";


function FooterColumn({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
}


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default FooterColumn;
