import React from "react";
import * as Styled from "./footer.styles";
import {
  AiOutlineFacebook,
  AiOutlineEnvironment,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlinePhone,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Grid, IconButton, Typography } from "@mui/material";
import Logo from "../../Assets/logo.svg";

export function Footer() {
  function socialMediaLink(value: string) {
    switch (value) {
      case "instagram":
        window.open("https://www.instagram.com/bsadvogadoss/", "_blank");
        break;
      case "facebook":
        window.open("https://www.instagram.com/bsadvogadoss/", "_blank");
        break;
      case "linkedin":
        window.open("https://www.instagram.com/bsadvogadoss/", "_blank");
        break;
      case "email":
        window.open("barbosadesousadvogados@gmail.com", "_blank");
        break;
      case "whatsapp":
        window.open(
          "https://api.whatsapp.com/send?phone=5583998453749",
          "_blank"
        );
        break;
      default:
        window.alert("Rede social não existente");
    }
  }
  return (
    <Styled.Footer>
      <Styled.FooterContent>
        <Grid container alignItems="center" justifyContent="space-evenly">
          <Grid item xs={2}>
            <Styled.LogoImg src={Logo} />
          </Grid>

          <Grid item xs={2}>
            <Typography variant="h6">
              Endereço <AiOutlineEnvironment />{" "}
            </Typography>
            <Typography variant="body2">
              Rua João Machado, 267, Sala 12, Prata - Campina Grande /PB CEP
              26758400
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="h6">
              Fale Conosco <AiOutlinePhone />
            </Typography>
            <Typography variant="body2">
              (83) 9 9637-3738 - <strong>Dr. João</strong>
            </Typography>
            <Typography variant="body2">
              (83) 9 8733-6830 - <strong>Dra. Amanda</strong>
            </Typography>

            <Grid item xs={2}>
              <Typography variant="body2">
                barbosadesousadvogados@gmail.com
              </Typography>
            </Grid>
          </Grid>

          <Grid item>
            <IconButton
              onClick={() => socialMediaLink("instagram")}
              aria-label="instagram"
            >
              <AiOutlineInstagram color="#000" />
            </IconButton>
            <IconButton
              onClick={() => socialMediaLink("linkedin")}
              aria-label="linkedin"
            >
              <AiOutlineLinkedin color="#000" />
            </IconButton>
            <IconButton
              onClick={() => socialMediaLink("facebook")}
              aria-label="facebook"
            >
              <AiOutlineFacebook color="#000" />
            </IconButton>
            <IconButton
              onClick={() => socialMediaLink("email")}
              aria-label="email"
            >
              <AiOutlineMail color="#000" />
            </IconButton>
            <IconButton
              onClick={() => socialMediaLink("whatsapp")}
              aria-label="whatsapp"
            >
              <AiOutlineTwitter color="#000" />
            </IconButton>
            <IconButton
              onClick={() => socialMediaLink("whatsapp")}
              aria-label="whatsapp"
            >
              <AiOutlineWhatsApp color="#000" />
            </IconButton>
          </Grid>
        </Grid>
      </Styled.FooterContent>
    </Styled.Footer>
  );
}