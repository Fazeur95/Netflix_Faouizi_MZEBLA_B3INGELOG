import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function Navlogin({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>;
  }
  
  /*---> Styles <---*/
  export const Wrapper = styled.nav`
    max-width: 1850px;
    width: 100%;
    display: flex;
    justify-content: right;  
    margin-right: auto;
    margin-left: auto;    
  
    @media (max-width: 550px) {
      margin-bottom: 100px;
    }
  `;
  
  export default Navlogin;