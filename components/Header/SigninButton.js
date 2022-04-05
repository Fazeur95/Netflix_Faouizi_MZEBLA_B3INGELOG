import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function SigninButton({ children, ...restProps }) {

  return (
    
    <div>
      <Link href="/signin" {...restProps}>
        {children}
      </Link>
      
    </div>
  );
}

/*---> Styles <---*/
export const Link = styled.a`
  display: block;
  background-color: #e50914;
  width: 105px;
  height: fit-content;
  color: #fff;
  border: 0;
  font-size: 15px;
  border-radius: 5px;
  padding: 10px 17px;
  cursor: pointer;
`;

export default SigninButton;
