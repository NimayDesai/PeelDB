import { useOrganizationQuery } from "../gql/generated/graphql";
import { useGetIntId } from "./useGetIntId";

export const useGetOrganizationFromUrl = () => {
  const intId = useGetIntId();
  return useOrganizationQuery({
    skip: intId === -1,
    variables: {
      id: intId,
    },
  });
};
