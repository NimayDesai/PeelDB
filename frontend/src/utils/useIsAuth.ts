import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  useMeQuery,
  useAddOrganizationMutation,
} from "../gql/generated/graphql";

// If User wanted to go to a page,
// but not logged in, go to the page
// the user wanted to go to after the user logs in
export const useIsAuth = () => {
  const { data, loading } = useMeQuery();
  const router = useRouter();

  useEffect(() => {
    if (!data?.me && !loading) {
      router.replace("/login?next=" + router.pathname);
    }
  }, [loading, data, router]);
};
