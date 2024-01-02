"use server";

import { signIn } from "@/lib/auth";
import { DEAFULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";
import { z } from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedField = LoginSchema.safeParse(values);

  if (!validatedField.success) {
    return { error: "Invalid fields" };
  }

  const { email, password } = validatedField.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEAFULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case "CredentialsSignin":
            return { error: "Invalid credentials!" };
          default:
            return { error: "Something went wrong!" };
        }
      }
    }

    throw error;
  }
};
