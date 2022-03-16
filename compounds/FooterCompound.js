import React from "react";
import FooterWrapper from "../components/Footer/FooterWrapper";
import FooterTitle from "../components/Footer/FooterTitle";
import FooterRow from "../components/Footer/FooterRow";
import FooterColumn from "../components/Footer/FooterColumn";
import FooterLink from "../components/Footer/FooterLink";

function FooterCompound() {
  return (
    <FooterWrapper>
      <FooterTitle>Des questions ? Appelez le (+33) 6 67 94 78 06</FooterTitle>
      <FooterRow>
        <FooterColumn>
          <FooterLink>FAQ</FooterLink>
          <FooterLink>Relations Investisseurs</FooterLink>
          <FooterLink>Modes de lecture</FooterLink>
          <FooterLink>Mentions légales</FooterLink>
          <FooterLink>Seulement sur Netflix</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink>Centre d'aide</FooterLink>
          <FooterLink>Recrutement</FooterLink>
          <FooterLink>Conditions d'utilisation</FooterLink>
          <FooterLink>Nous contacter</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink>Compte</FooterLink>
          <FooterLink>Utiliser des cartes cadeaux</FooterLink>
          <FooterLink>Confidentialité</FooterLink>
          <FooterLink>Test de vitesse</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink>Presse</FooterLink>
          <FooterLink>Acheter des cartes cadeaux</FooterLink>
          <FooterLink>Préférences de cookies</FooterLink>
          <FooterLink>Informations légales</FooterLink>
        </FooterColumn>
      </FooterRow>
    </FooterWrapper>
  );
}

export default FooterCompound;
