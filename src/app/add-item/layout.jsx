import { AuthGuard } from "@/components/auth-guard";

export default function AddItemLayout({ children }) {
  return <AuthGuard>{children}</AuthGuard>;
}
