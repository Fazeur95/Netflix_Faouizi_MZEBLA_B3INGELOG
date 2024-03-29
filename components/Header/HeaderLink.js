import React from "react";
import styled from "styled-components";

function HeaderLink({ children, ...restProps }) {
  return (
    <Wrapper>
      <a {...restProps}>{children}</a>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  padding: 5px;

  a {
    color: #fff;
    margin-left: 25px;
    cursor: pointer;
    font-weight: normal;
  }
`;

export default HeaderLink;
