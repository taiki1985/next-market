import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import supabase from "../../../utils/database";

export async function POST(request) {
  const reqBody = await request.json()
  try {
    const {data, error} = await supabase
                                    .from("users")
                                    .select().eq("email",reqBody.email)
                                    .single()
    if (!error) {
      if (reqBody.password == data.password) {
        const secretKey = new TextEncoder().encode("next-route-market-handlers")
        const payload = {
          email:reqBody.email,
        }
        const token = await new SignJWT(payload)
                                .setProtectedHeader({alg: "HS256"})
                                .setExpirationTime("1d")
                                .sign(secretKey)
        console.log(token)
        return NextResponse.json({message: "ログイン成功", token: token})
      } else {
        return NextResponse.json({message: "パスワードが間違っています。"})
      }
    } else {
      return NextResponse.json({message: "ログイン失敗 : ユーザーを登録してください"})
    }
  } catch (err) {
    return NextResponse.json({message: "ログイン失敗"})
  }
}
