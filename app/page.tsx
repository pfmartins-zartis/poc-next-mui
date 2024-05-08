import { getSubject } from "@/server/dashboard/getSubject";
import { login } from "@/server/user/login";
import { isEmpty } from "lodash";
import { permanentRedirect } from "next/navigation";

export default async function Home() {
  const user = await login();
  const subeject = await getSubject(user.brandsOfInterest[0].id);
  if (!isEmpty(user.brandsOfInterest)) {
    permanentRedirect(`/dashboard/brands/${user.brandsOfInterest[0].slug}`);
  }
  return <></>;
}
