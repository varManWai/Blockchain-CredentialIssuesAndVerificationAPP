import NextAuth from "next-auth/next";

import CredentialsProvider from "next-auth/providers/credentials";

import connectMongo from "../../../utils/connectMongo";

import Educator from "../../../models/educator";
import { verifyPassword } from "../../../utils/auth";

export default NextAuth({
  session: {
    jwt: true,
  },

  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await connectMongo();

        const educator = await Educator.findOne({ email: credentials.email.toLowerCase() });

        if (!educator) {
          throw new Error("Incorrect email or password");
        }

        const isValid = await verifyPassword(
          credentials.password,
          educator.password
        );

        if (!isValid) {
          throw new Error("Incorrect email or password");
        }

        // session.userId = educator.id;
        
        return { email: educator.email.toLowerCase() };
      },
    }),
  ],
});
