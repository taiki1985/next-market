import { NextResponse } from "next/server"
import { jwtVerify } from "jose"

export async function middleware(request) {
  const token = await request.headers.get("Authorization")?.split(" ")[1]
  console.log(token)
  if(!token) {
    return NextResponse.json({message:"トークンが有りません"})
  }

  try {
    const secretKey = new TextEncoder().encode("next-route-market-handlers")
    const decodedJwt = await jwtVerify(token, secretKey)
    console.log("decodedJwt:", decodedJwt)
    return NextResponse.next()
  } catch {
    return NextResponse.json({message:"トークンが正しくないので、ログインしてください"})
  }
}

export const config = {
  matcher:["/api/item/create", "/api/item/update/:path*", "/api/item/delete/:path*"],
}
