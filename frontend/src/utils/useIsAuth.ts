import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  useMeQuery,
  useAddOrganizationMutation,
} from "../gql/generated/graphql";

export const useIsAuth = () => {
  const { data, loading } = useMeQuery();
  const router = useRouter();

  useEffect(() => {
    if (!data?.me && !loading) {
      router.replace("/login?next=" + router.pathname);
    }
  }, [loading, data, router]);
};
