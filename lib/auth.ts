import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "traveler@roamly.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Prototype credential authentication logic
        if (credentials?.email && credentials?.password) {
          // If valid (just checking presence in prototype/foundation phase)
          return {
            id: "demo-user-id",
            name: "Demo Traveler",
            email: credentials.email,
            image: "/images/placeholder-user.jpg"
          };
        }
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "fallback-secret-for-development",
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.sub;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    }
  },
  pages: {
    signIn: "/login",
  }
};
export default authOptions;
