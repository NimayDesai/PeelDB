import { withApollo as createWithApollo } from "next-apollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { PaginatedOrganizations } from "../gql/generated/graphql";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
  cache: new InMemoryCache({
    typePolicies: {
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
        },
      },
    },
  }),
});

export const withApollo = createWithApollo(client);
