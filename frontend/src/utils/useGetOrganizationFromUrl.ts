import { useOrganizationQuery } from "../gql/generated/graphql";
import { useGetIntegerId } from "./useGetIntId";

export const useGetOrganizationFromUrl = () => {
  // Get the id from the URL
  const intId = useGetIntegerId();
  // Return a query call to Apollo Client
  return useOrganizationQuery({
    skip: intId === -1,
    variables: {
      id: intId,
    },
  });
};
