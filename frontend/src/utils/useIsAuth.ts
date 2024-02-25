import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMeQuery } from "../gql/generated/graphql";

export const useIsAuth = () => {
  // Get the current user
  const { data, loading } = useMeQuery();
  const router = useRouter();

  useEffect(() => {
    // If the user is not logged in, then redirect to login page
    if (!data?.me && !loading) {
      router.replace("/login?next=" + router.pathname);
    }
  }, [loading, data, router]);
};
