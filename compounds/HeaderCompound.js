import React from "react";
import FeatureWrapper from "../components/Feature/FeatureWrapper";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import Logo from "../components/Header/Logo";
import Navbar from "../components/Header/Navbar";
import SigninButton from "../components/Header/SigninButton";
import FeatureTitle from "../components/Feature/FeatureTitle";
import Warning from "../components/Feature/Warning";
import LanguageSelect from "../components/Header/LanguageSelect";
import Navlogin from "../components/Header/Navlogin";


function HeaderCompound({ children }) {
  return (
    <>
      <HeaderWrapper>
        <Navbar>
          <Logo />
          <Navlogin>
          <LanguageSelect></LanguageSelect>
          <SigninButton>S'Identifier</SigninButton>
          </Navlogin>
        </Navbar>
        <FeatureWrapper>
          <FeatureTitle>
            Films, séries TV et bien plus en illimité.
          </FeatureTitle>
        </FeatureWrapper>
        {children}
      </HeaderWrapper>
    </>
  );
}

export default HeaderCompound;
