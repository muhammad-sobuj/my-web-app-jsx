import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";

export async function AuthGuard({ children }) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return <>{children}</>;
}
