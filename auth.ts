import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

import type { NextAuthConfig } from "next-auth";

export const config = {
  theme: {
    logo: "https://res.cloudinary.com/dko1ffxgt/image/upload/v1704726186/Screenshot_2024-01-08_193306_id4iwm.png",
  },
  providers: [Google],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname === "/middleware-example") return !!auth;
      return true;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
