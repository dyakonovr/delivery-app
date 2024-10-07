import { useEffect } from "react";
import { useUserStore } from "@/entities/user";
import { useSessionQuery } from "@/entities/user";
import { GRAPHQL_AUTHORIZATION_CONTEXT } from "@/shared/config";

export function RefreshSession() {
  const { setUser } = useUserStore();
  const { data, loading } = useSessionQuery({
    ...GRAPHQL_AUTHORIZATION_CONTEXT
  });

  useEffect(() => {
    if (loading || !data) return;
    setUser(data.session.success ? data.session.user : null);
  }, [data, loading]);

  return null;
}
