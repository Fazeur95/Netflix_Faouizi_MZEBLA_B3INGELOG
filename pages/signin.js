import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { FirebaseContext } from "../context/FirbaseContext";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import Navbar from "../components/Header/Navbar";
import Logo from "../components/Header/Logo";
import FooterCompound from "../compounds/FooterCompound";
import SignFormWrapper from "../components/SignForm/SignFormWrapper";
import SignFormBase from "../components/SignForm/SignFormBase";
import SignFormTitle from "../components/SignForm/SignFormTitle";
import SignFormInput from "../components/SignForm/SignFormInput";
import SignFormButton from "../components/SignForm/SignFormButton";
import SignFormText from "../components/SignForm/SignFormText";
import SignFormLink from "../components/SignForm/SignFormLink";
import SignFormCaptcha from "../components/SignForm/SignFormCaptcha";
import SignFormError from "../components/SignForm/SignFormError";
import Warning from "../components/Feature/Warning";

function SigninPage() {
  const history = useRouter();
  const firebase = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const IsInvalid = password === "" || emailAddress === "";

  const handleSubmit = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        setEmailAddress("");
        setPassword("");
        setError("");
        history.push("/browse");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <>
      <HeaderWrapper>
        <Navbar>
          <Logo />
        </Navbar>
        <SignFormWrapper>
          <SignFormBase onSubmit={handleSubmit} method="POST">
            <SignFormTitle>S'identifier</SignFormTitle>
            {error ? <SignFormError>{error}</SignFormError> : null}
            <SignFormInput
              type="text"
              placeholder="E-mail ou numéro de téléphone"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <SignFormInput
              type="password"
              placeholder="Mot de passe"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <SignFormButton disabled={IsInvalid}>S'identifier</SignFormButton>
            <SignFormText>
              Première visite sur Netflix ?
              <SignFormLink href="/signup">Inscrivez-vous</SignFormLink>
            </SignFormText>
            <SignFormCaptcha>
              Cette page est protégée par Google reCAPTCHA pour nous assurer que
              vous n'êtes pas un robot.
            </SignFormCaptcha>
          </SignFormBase>
        </SignFormWrapper>
      </HeaderWrapper>
      <FooterCompound />
    </>
  );
}

export default SigninPage;
