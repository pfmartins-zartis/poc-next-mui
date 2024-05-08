import { login } from "@/server/user/login";

export async function GET() {
  const user = await login();

  return Response.json(user);
}
