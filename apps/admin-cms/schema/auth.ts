import { type } from "arktype";


export const loginSchema = type({
    email: "string.email",
    password: "6 < string <= 18"
});

export const registerSchema = type({
    name: "string",
    email: "string.email",
    password: "6 < string <= 18"
})