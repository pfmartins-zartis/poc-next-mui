import { IBrand } from "@/client/contexts/user/user.types";
import geico from "./geico.json";

export async function getSubject(subjectId: string): Promise<IBrand> {
  return new Promise((resolve) => setTimeout(resolve, 2000, geico));
}
