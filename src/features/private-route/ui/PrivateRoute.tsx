import { useNavigate } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useUserStore } from "@/entities/user";
import { PagePaths } from "@/shared/config";

export function PrivateRoute({ children }: { children: ReactNode }) {
  const isAuth = useUserStore((state) => state.isAuth);
  const navigate = useNavigate();

  if (isAuth === false) navigate({ to: PagePaths.LOGIN });
  return children;
}
