import { useOrganizationQuery } from "../gql/generated/graphql";
import { useGetIntId } from "./useGetIntId";

export const useGetOrganizationFromUrl = () => {
  // Get the id from the URL
  const intId = useGetIntId();
  // Return a query call to Apollo Client
  return useOrganizationQuery({
    skip: intId === -1,
    variables: {
      id: intId,
    },
  });
};
