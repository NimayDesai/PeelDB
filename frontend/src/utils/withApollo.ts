import { withApollo as createWithApollo } from "next-apollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { PaginatedOrganizations } from "../gql/generated/graphql";

// Custom withApollo for type safety
const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL, // Connect to the GraphQL endpoint
  credentials: "include", // Include credentials
  cache: new InMemoryCache({
    typePolicies: {
      // Merge the incoming data with the existing data when clicking the load more button
      Query: {
        fields: {
          organizations: {
            keyArgs: [],
            merge(
              existing: PaginatedOrganizations | undefined,
              incoming: PaginatedOrganizations
            ): PaginatedOrganizations {
              return {
                ...incoming,
                organizations: [
                  ...(existing?.organizations || []),
                  ...incoming.organizations,
                ],
              };
            },
          },
          organizationbyUser: {
            keyArgs: [],
            merge(
              existing: PaginatedOrganizations | undefined,
              incoming: PaginatedOrganizations
            ): PaginatedOrganizations {
              return {
                ...incoming,
                organizations: [
                  ...(existing?.organizations || []),
                  ...incoming.organizations,
                ],
              };
            },
          },
        },
      },
    },
  }),
});

export const withApollo = createWithApollo(client);
