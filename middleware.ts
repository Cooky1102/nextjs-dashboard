import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|customers|.png).*)"], // 除了api、_next/static、_next/image、.png之外的所有路径都将被中间件处理
};

// 加了 customers  不然会提示 ImageError: Unable to optimize image and unable to fallback to upstream image
// https://stackoverflow.com/questions/76286726/nextjs-imageerror-unable-to-optimize-image-and-unable-to-fallback-to-upstream-i
