import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "Enter username here"
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter password here"
        },
      },
      async authorize(credentials) {
        // retrieve user data from DB here
        // https://next-auth.js.org/configuration/providers/credentials

        const user = { id: "1", name: "Ica", password: "12345"}

        if (credentials?.username === user.name && credentials?.password === user.password) {
          return user;
        } else {
          return null;
        }

        /* const res = await fetch("/your/endpoint", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json()
  
        // If no error and we have user data, return it
        if (res.ok && user) {
          return user
        }
        // Return null if user data could not be retrieved
        return null; */
      }
    })
  ],
/*   pages: {
    signIn: "/signin"
  } */
/*   session: {

  } */
}