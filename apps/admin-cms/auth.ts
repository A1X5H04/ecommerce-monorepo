import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./lib/prisma";

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

                

                return user;
            }
        })
    ],
    
})