"use server";

import { RegisterSchema } from "@/schemas";
import { z } from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedField = RegisterSchema.safeParse(values);

  if (!validatedField.success) {
    return { error: "Invalid fields" };
  }

  const { name, email, password } = validatedField.data;

  const hashedPassword = await bcrypt.hash(values.password, 10);

  const emailTaken = await getUserByEmail(email);

  if (emailTaken) {
    return { error: "Email already taken" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // TODO: Send verification email

  return { success: "Email sent" };
};
