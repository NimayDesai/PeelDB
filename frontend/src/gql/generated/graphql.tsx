import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addOrganization: Organization;
  deleteOrganization: Scalars['Boolean']['output'];
  login: UserResponse;
  logout: Scalars['Boolean']['output'];
  register: UserResponse;
  updateOrganization?: Maybe<Organization>;
  vote: Scalars['Boolean']['output'];
};


export type MutationAddOrganizationArgs = {
  input: OrganizationInput;
};


export type MutationDeleteOrganizationArgs = {
  id: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  options: UsernamePasswordEmailInput;
};


export type MutationRegisterArgs = {
  options: RegisterInput;
};


export type MutationUpdateOrganizationArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Float']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  typeOfOrganization?: InputMaybe<Scalars['String']['input']>;
};


export type MutationVoteArgs = {
  organizationId: Scalars['Int']['input'];
  value: Scalars['Int']['input'];
};

export type Organization = {
  __typename?: 'Organization';
  address: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  creator: User;
  creatorId: Scalars['Float']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  points: Scalars['Float']['output'];
  typeOfOrganization: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  voteStatus?: Maybe<Scalars['Int']['output']>;
};

export type OrganizationInput = {
  address: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  typeOfOrganization: Scalars['String']['input'];
};

export type PaginatedOrganizations = {
  __typename?: 'PaginatedOrganizations';
  hasMore: Scalars['Boolean']['output'];
  organizations: Array<Organization>;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String']['output'];
  me?: Maybe<User>;
  organization?: Maybe<Organization>;
  organizations: PaginatedOrganizations;
};


export type QueryOrganizationArgs = {
  id: Scalars['Int']['input'];
};


export type QueryOrganizationsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  searchOptions: Scalars['String']['input'];
  searchValue: Scalars['String']['input'];
};

export type RegisterInput = {
  confirmPassword: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  updatedAt: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type UsernamePasswordEmailInput = {
  password: Scalars['String']['input'];
  usernameOrEmail: Scalars['String']['input'];
};

export type OrganizationSnippetFragment = { __typename?: 'Organization', id: number, createdAt: string, updatedAt: string, typeOfOrganization: string, name: string, email: string, phoneNumber: string, address: string, points: number, voteStatus?: number | null, creatorId: number, creator: { __typename?: 'User', id: number, username: string, email: string } };

export type RegularUserFragment = { __typename?: 'User', username: string, email: string, id: number };

export type AddOrganizationMutationVariables = Exact<{
  input: OrganizationInput;
}>;


export type AddOrganizationMutation = { __typename?: 'Mutation', addOrganization: { __typename?: 'Organization', id: number, createdAt: string, updatedAt: string, name: string, phoneNumber: string, address: string, email: string, typeOfOrganization: string } };

export type DeleteOrganizationMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteOrganizationMutation = { __typename?: 'Mutation', deleteOrganization: boolean };

export type LoginMutationVariables = Exact<{
  options: UsernamePasswordEmailInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', username: string, email: string, id: number } | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
  confirmPassword: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', username: string, email: string, id: number } | null } };

export type VoteMutationVariables = Exact<{
  organizationId: Scalars['Int']['input'];
  value: Scalars['Int']['input'];
}>;


export type VoteMutation = { __typename?: 'Mutation', vote: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', username: string, email: string, id: number } | null };

export type OrganizationQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type OrganizationQuery = { __typename?: 'Query', organization?: { __typename?: 'Organization', id: number, createdAt: string, updatedAt: string, typeOfOrganization: string, name: string, email: string, phoneNumber: string, address: string, points: number, creator: { __typename?: 'User', id: number, username: string, email: string } } | null };

export type OrganizationsQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
  searchOptions: Scalars['String']['input'];
  searchValue: Scalars['String']['input'];
}>;


export type OrganizationsQuery = { __typename?: 'Query', organizations: { __typename?: 'PaginatedOrganizations', hasMore: boolean, organizations: Array<{ __typename?: 'Organization', id: number, createdAt: string, updatedAt: string, typeOfOrganization: string, name: string, email: string, phoneNumber: string, address: string, points: number, voteStatus?: number | null, creatorId: number, creator: { __typename?: 'User', id: number, username: string, email: string } }> } };

export const OrganizationSnippetFragmentDoc = gql`
    fragment OrganizationSnippet on Organization {
  id
  createdAt
  updatedAt
  typeOfOrganization
  name
  email
  phoneNumber
  address
  points
  voteStatus
  creatorId
  creator {
    id
    username
    email
  }
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  username
  email
  id
}
    `;
export const AddOrganizationDocument = gql`
    mutation addOrganization($input: OrganizationInput!) {
  addOrganization(input: $input) {
    id
    createdAt
    updatedAt
    name
    phoneNumber
    address
    email
    typeOfOrganization
  }
}
    `;
export type AddOrganizationMutationFn = Apollo.MutationFunction<AddOrganizationMutation, AddOrganizationMutationVariables>;

/**
 * __useAddOrganizationMutation__
 *
 * To run a mutation, you first call `useAddOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addOrganizationMutation, { data, loading, error }] = useAddOrganizationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<AddOrganizationMutation, AddOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddOrganizationMutation, AddOrganizationMutationVariables>(AddOrganizationDocument, options);
      }
export type AddOrganizationMutationHookResult = ReturnType<typeof useAddOrganizationMutation>;
export type AddOrganizationMutationResult = Apollo.MutationResult<AddOrganizationMutation>;
export type AddOrganizationMutationOptions = Apollo.BaseMutationOptions<AddOrganizationMutation, AddOrganizationMutationVariables>;
export const DeleteOrganizationDocument = gql`
    mutation DeleteOrganization($id: Int!) {
  deleteOrganization(id: $id)
}
    `;
export type DeleteOrganizationMutationFn = Apollo.MutationFunction<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>;

/**
 * __useDeleteOrganizationMutation__
 *
 * To run a mutation, you first call `useDeleteOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOrganizationMutation, { data, loading, error }] = useDeleteOrganizationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>(DeleteOrganizationDocument, options);
      }
export type DeleteOrganizationMutationHookResult = ReturnType<typeof useDeleteOrganizationMutation>;
export type DeleteOrganizationMutationResult = Apollo.MutationResult<DeleteOrganizationMutation>;
export type DeleteOrganizationMutationOptions = Apollo.BaseMutationOptions<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>;
export const LoginDocument = gql`
    mutation Login($options: UsernamePasswordEmailInput!) {
  login(options: $options) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($username: String!, $password: String!, $confirmPassword: String!, $email: String!) {
  register(
    options: {username: $username, password: $password, confirmPassword: $confirmPassword, email: $email}
  ) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      confirmPassword: // value for 'confirmPassword'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const VoteDocument = gql`
    mutation Vote($organizationId: Int!, $value: Int!) {
  vote(organizationId: $organizationId, value: $value)
}
    `;
export type VoteMutationFn = Apollo.MutationFunction<VoteMutation, VoteMutationVariables>;

/**
 * __useVoteMutation__
 *
 * To run a mutation, you first call `useVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [voteMutation, { data, loading, error }] = useVoteMutation({
 *   variables: {
 *      organizationId: // value for 'organizationId'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useVoteMutation(baseOptions?: Apollo.MutationHookOptions<VoteMutation, VoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VoteMutation, VoteMutationVariables>(VoteDocument, options);
      }
export type VoteMutationHookResult = ReturnType<typeof useVoteMutation>;
export type VoteMutationResult = Apollo.MutationResult<VoteMutation>;
export type VoteMutationOptions = Apollo.BaseMutationOptions<VoteMutation, VoteMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export function useMeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const OrganizationDocument = gql`
    query Organization($id: Int!) {
  organization(id: $id) {
    id
    createdAt
    updatedAt
    typeOfOrganization
    name
    email
    phoneNumber
    address
    points
    creator {
      id
      username
      email
    }
  }
}
    `;

/**
 * __useOrganizationQuery__
 *
 * To run a query within a React component, call `useOrganizationQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrganizationQuery(baseOptions: Apollo.QueryHookOptions<OrganizationQuery, OrganizationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrganizationQuery, OrganizationQueryVariables>(OrganizationDocument, options);
      }
export function useOrganizationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrganizationQuery, OrganizationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrganizationQuery, OrganizationQueryVariables>(OrganizationDocument, options);
        }
export function useOrganizationSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<OrganizationQuery, OrganizationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<OrganizationQuery, OrganizationQueryVariables>(OrganizationDocument, options);
        }
export type OrganizationQueryHookResult = ReturnType<typeof useOrganizationQuery>;
export type OrganizationLazyQueryHookResult = ReturnType<typeof useOrganizationLazyQuery>;
export type OrganizationSuspenseQueryHookResult = ReturnType<typeof useOrganizationSuspenseQuery>;
export type OrganizationQueryResult = Apollo.QueryResult<OrganizationQuery, OrganizationQueryVariables>;
export const OrganizationsDocument = gql`
    query Organizations($limit: Int!, $cursor: String, $searchOptions: String!, $searchValue: String!) {
  organizations(
    limit: $limit
    cursor: $cursor
    searchOptions: $searchOptions
    searchValue: $searchValue
  ) {
    hasMore
    organizations {
      ...OrganizationSnippet
    }
  }
}
    ${OrganizationSnippetFragmentDoc}`;

/**
 * __useOrganizationsQuery__
 *
 * To run a query within a React component, call `useOrganizationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *      searchOptions: // value for 'searchOptions'
 *      searchValue: // value for 'searchValue'
 *   },
 * });
 */
export function useOrganizationsQuery(baseOptions: Apollo.QueryHookOptions<OrganizationsQuery, OrganizationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrganizationsQuery, OrganizationsQueryVariables>(OrganizationsDocument, options);
      }
export function useOrganizationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrganizationsQuery, OrganizationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrganizationsQuery, OrganizationsQueryVariables>(OrganizationsDocument, options);
        }
export function useOrganizationsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<OrganizationsQuery, OrganizationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<OrganizationsQuery, OrganizationsQueryVariables>(OrganizationsDocument, options);
        }
export type OrganizationsQueryHookResult = ReturnType<typeof useOrganizationsQuery>;
export type OrganizationsLazyQueryHookResult = ReturnType<typeof useOrganizationsLazyQuery>;
export type OrganizationsSuspenseQueryHookResult = ReturnType<typeof useOrganizationsSuspenseQuery>;
export type OrganizationsQueryResult = Apollo.QueryResult<OrganizationsQuery, OrganizationsQueryVariables>;