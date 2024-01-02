import React from "react";
import { CardWrapper } from "./card-wrapper";

const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Login to your account using your email and password or continue with socials."
      backButtonLabel="Dont have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <p></p>
    </CardWrapper>
  );
};

export default LoginForm;
