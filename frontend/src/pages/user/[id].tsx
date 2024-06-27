import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Link,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { StarSection } from "../../components/StarSection";
import { Wrapper } from "../../components/Wrapper";
import {
  useDeleteOrganizationMutation,
  useGetUserQuery,
  useMeQuery,
  useOrganizationByUserQuery,
} from "../../gql/generated/graphql";
import { useGetIntegerId } from "../../utils/useGetIntId";

const ViewUser: React.FC<{}> = ({}) => {
  const integerId = useGetIntegerId();
  const { data: userData } = useGetUserQuery({
    variables: {
      id: integerId,
    },
  });
  const { data: meData } = useMeQuery();
  const [deleteOrganization] = useDeleteOrganizationMutation();

  const { data, fetchMore, variables } = useOrganizationByUserQuery({
    variables: {
      limit: 10,
      cursor: null,
      userId: integerId,
    },
    skip: integerId === -1,
  });
  return (
    <Wrapper variant="regular">
      {userData?.getUser ? (
        <Box m="auto">
          <Heading>User: {userData.getUser.username}</Heading>
          <Heading>Organizations created</Heading>
          <Box mt={8}>
            <Stack spacing={8}>
              {/* Display server error if no data but return no results found for empty data */}
              {!data?.organizationbyUser ||
              data!.organizationbyUser.organizations.length < 1 ? (
                <div>
                  {!data?.organizationbyUser
                    ? "Server Error"
                    : "There are no search results availble"}
                </div>
              ) : (
                data?.organizationbyUser.organizations.map((o) => (
                  <Card key={o.id}>
                    <CardHeader flexDirection={"row"}>
                      <Flex align={"center"}>
                        <NextLink
                          href="/organization/[id]"
                          as={`/organization/${o.id}`}
                        >
                          <Link>
                            <Heading size="lg">Name: {o.name} </Heading>
                          </Link>
                        </NextLink>
                        {meData?.me ? (
                          <StarSection isOnMainPage organization={o} />
                        ) : null}
                        {meData?.me?.id === o.creatorId ? (
                          <IconButton
                            icon={<DeleteIcon />}
                            mr={2}
                            colorScheme="red"
                            aria-label="Delete Organization"
                            onClick={() => {
                              deleteOrganization({
                                variables: { id: o.id },
                                update: (cache) =>
                                  cache.evict({ id: "Organization:" + o.id }),
                              });
                            }}
                          />
                        ) : null}
                        {meData?.me?.id === o.creatorId ? (
                          <NextLink
                            href={"/update-organization/[id]"}
                            as={`/update-organization/${o.id}`}
                          >
                            <IconButton
                              as={Link}
                              icon={<EditIcon />}
                              colorScheme="blue"
                              aria-label="Update Organization"
                            />
                          </NextLink>
                        ) : null}
                      </Flex>
                    </CardHeader>

                    <CardBody>
                      <Stack divider={<StackDivider />} spacing="4">
                        <Box>
                          <Heading size="xs" textTransform="uppercase">
                            Type of Organization
                          </Heading>
                          <Text pt="2" fontSize="sm">
                            {o.typeOfOrganization}
                          </Text>
                        </Box>
                        <Box>
                          <Heading size="xs" textTransform="uppercase">
                            Email
                          </Heading>
                          <Text pt="2" fontSize="sm">
                            {o.email}
                          </Text>
                        </Box>
                        <Box>
                          <Heading size="xs" textTransform="uppercase">
                            Contact Info
                          </Heading>
                          <Text pt="2" fontSize="sm">
                            {o.phoneNumber}
                          </Text>
                          <Text pt="2" fontSize="sm">
                            {o.address}
                          </Text>
                        </Box>
                      </Stack>
                    </CardBody>
                  </Card>
                ))
              )}
            </Stack>

            {data && data.organizationbyUser.hasMore ? (
              <Flex mt={8}>
                <Button
                  my={8}
                  m="auto"
                  onClick={() => {
                    // When the load more button is clicked fetch more data using the current limit, but the cursor of the last current organization
                    fetchMore({
                      variables: {
                        limit: variables?.limit,
                        cursor:
                          data.organizationbyUser.organizations[
                            data.organizationbyUser.organizations.length - 1
                          ].createdAt,
                      },
                    });
                  }}
                >
                  Load More
                </Button>
              </Flex>
            ) : null}
          </Box>
        </Box>
      ) : (
        <div>
          <div>Could not find user</div>
        </div>
      )}
    </Wrapper>
  );
};

export default ViewUser;
