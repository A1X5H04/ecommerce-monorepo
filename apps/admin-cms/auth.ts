import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";

import { prisma } from "@/lib/prisma"
import { loginSchema } from "./schema/auth";
import { type } from "arktype";

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
            credentials: {
                email: {
                    type: "email",
                    label: "Email Address",
                    placeholder: "johndoe@example.com"
                },
                password: {
                    type: "password",
                    label: "Password",
                    placeholder: "*********"
                }
            },

            authorize: async (creds) => {
                let user = null;

                const validateSchema = loginSchema(creds);

                if (validateSchema instanceof type.errors) {
                    console.error(validateSchema.summary);
                    return null;
                }            

                return user;
            }
        })
    ],
    
})