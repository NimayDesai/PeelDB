import { DeleteIcon, EditIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  InputGroup,
  Link,
  Select,
  Stack,
  StackDivider,
  Text
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import NextLink from 'next/link';
import { InputField } from "../components/InputField";
import { StarSection } from "../components/StarSection";
import { Wrapper } from "../components/Wrapper";
import { useDeleteOrganizationMutation, useMeQuery, useOrganizationsQuery } from "../gql/generated/graphql";
import { withApollo } from "../utils/withApollo";

const Index = () => {
  const { data, fetchMore, variables, refetch } = useOrganizationsQuery({
    variables: {
      limit: 10,
      cursor: null,
      searchValue: "",
      searchOptions: "name",
    }
  });
  const { data: meData } = useMeQuery()
  console.log(meData?.me?.id)
  const [deleteOrganization,] = useDeleteOrganizationMutation();
  return (
    <Wrapper>
      <Heading size="xl">Organizations: </Heading>
      <br />
      <Formik onSubmit={async (values) => {
        // When User searches refetch data with new values
        await refetch({
          searchValue: values.searchValue.toLowerCase(),
          searchOptions: values.searchOptions
        })
      }} initialValues={{ searchOptions: "", searchValue: "", }}>
        {({ handleChange }) => (
          <Form>
            <InputGroup>
              <Select w="300px" placeholder='Select By' name='searchOptions' onChange={handleChange}>
                <option value="name">Name</option>
                <option value='"typeOfOrganization"'>Type Of Organization</option>
                <option value="address">Address</option>
                <option value='"phoneNumber"'>Phone Number </option>
                <option value="email">Email</option>
              </Select>
              <InputField name="searchValue" placeholder="search" />
              <IconButton icon={<SearchIcon />} aria-label="Search" type="submit" onClick={() => {
              }} />
            </InputGroup>
          </Form>
        )}
      </Formik>
      <Box mt={8}>
        <Stack spacing={8}>
          {/* Display server error if no data but return no results found for empty data */}
          {(!data?.organizations || data!.organizations.organizations.length < 1) ? <div>{!data?.organizations ? "Server Error" : "There are no search results availble"}</div> : data?.organizations.organizations.map(o => (
            <Card key={o.id}>
              <CardHeader flexDirection={"row"}>
                <Flex align={"center"}>
                  <NextLink href="/organization/[id]" as={`/organization/${o.id}`}>
                    <Link>
                      <Heading size='lg'>Name: {o.name} </Heading>
                    </Link>
                  </NextLink>
                  {meData?.me ? <StarSection isOnMainPage organization={o} /> : null}
                  {meData?.me?.id === o.creatorId ?
                    <IconButton icon={<DeleteIcon />} mr={2} colorScheme='red' aria-label="Delete Organization" onClick={() => {
                      deleteOrganization({
                        variables: { id: o.id },
                        update: (cache) => cache.evict({ id: "Organization:" + o.id })
                      })
                    }} /> : null}
                  {meData?.me?.id === o.creatorId ?
                    <NextLink href={'/update-organization/[id]'} as={`/update-organization/${o.id}`}>
                      <IconButton as={Link} icon={<EditIcon />} colorScheme="blue" aria-label="Update Organization" />
                    </NextLink> : null}
                </Flex>

                <Heading size='sm' mt={2}>Added by: {o.creator.username}</Heading>

              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Type of Organization
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      {o.typeOfOrganization}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Email
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      {o.email}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Contact Info
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      {o.phoneNumber}
                    </Text>
                    <Text pt='2' fontSize='sm'>
                      {o.address}
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          )
          )}
        </Stack>

        {data && data.organizations.hasMore ?
          <Flex mt={8}>
            <Button my={8} m="auto" onClick={() => {
              // When the load more button is clicked fetch more data using the current limit, but the cursor of the last current organization
              fetchMore({
                variables: {
                  limit: variables?.limit,
                  cursor: data.organizations.organizations[data.organizations.organizations.length - 1].createdAt
                }
              })
            }}>Load More</Button>
          </Flex> : null}
      </Box>
    </Wrapper >
  )
};

export default withApollo({ srr: true })(Index);
