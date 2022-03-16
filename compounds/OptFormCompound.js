import React from "react";
import OptFormWrapper from "../components/OptForm/OptFormWrapper";
import OptFormText from "../components/OptForm/OptFormText";
import OptFormEmail from "../components/OptForm/OptFormEmail";
import OptFormButton from "../components/OptForm/OptFormButton";

function OptFormCompound({ children }) {
  return (
    <>
      <OptFormText>
        Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous
        abonner ou réactiver votre abonnement.
      </OptFormText>
      <OptFormWrapper>
        <OptFormEmail></OptFormEmail>
        <OptFormButton>Commencer</OptFormButton>
      </OptFormWrapper>
      {children}
    </>
  );
}

export default OptFormCompound;
