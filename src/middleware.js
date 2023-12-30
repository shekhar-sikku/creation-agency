import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};

/*
? openssl rand -base64 32
* lNQ0+keIbx3zPxHbBg7cKSxigvf1cp2SgDVQq7yCNuY=
*/