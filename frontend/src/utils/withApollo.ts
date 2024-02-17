import { withApollo as createWithApollo } from "next-apollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { PaginatedOrganizations } from "../gql/generated/graphql";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
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
