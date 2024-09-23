import { useEffect } from "react";
import { useUserStore } from "@/entities/user";
import { useSessionQuery } from "@/shared/api";
import { API_AUTHORIZATION_TOKEN, API_HEADER_AUTHORIZATION } from "@/shared/config";

export function RefreshSession() {
  const { setUser } = useUserStore();
  const { data, loading } = useSessionQuery({
    context: {
      headers: {
        [API_HEADER_AUTHORIZATION]: API_AUTHORIZATION_TOKEN
      }
    }
  });

  useEffect(() => {
    if (loading || !data) return;
    setUser(data.session.success ? data.session.user : null);
  }, [data, loading]);

  return null;
}
