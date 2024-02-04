import { DeleteIcon, SearchIcon } from '@chakra-ui/icons';
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
  InputRightAddon,
  Link,
  Stack,
  StackDivider,
  Text
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import NextLink from 'next/link';
import { useEffect, useState } from "react";
import { InputField } from "../components/InputField";
import { StarSection } from "../components/StarSection";
import { Wrapper } from "../components/Wrapper";
import { useDeleteOrganizationMutation, useMeQuery, useOrganizationsQuery } from "../gql/generated/graphql";
import { withApollo } from "../utils/withApollo";

const Index = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const { data, error, loading, fetchMore, variables, refetch } = useOrganizationsQuery({
    variables: {
      limit: 10,
      cursor: null,
      searchOptions: ""
    }
  });
  const { data: meData } = useMeQuery()
  const [deleteOrganization,] = useDeleteOrganizationMutation();
  console.log(data);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <Wrapper>
      <Heading size="xl">Organizations: </Heading>
      <br />
      <Formik onSubmit={async (values) => {
        await refetch({
          searchOptions: values.searchOptions.toLowerCase()
        })
      }} initialValues={{ searchOptions: "", }}>
        <Form>

          <InputGroup>
            <InputField name="searchOptions" placeholder="search" />

            <InputRightAddon>
              <IconButton icon={<SearchIcon />} aria-label="Search" type="submit" onClick={() => {

              }} />
            </InputRightAddon>
          </InputGroup>
        </Form>
      </Formik>
      {domLoaded ?
        <Box mt={8}>
          <Stack spacing={8}>
            {!data ? null : data?.organizations.organizations.map(o => (
              <Card key={o.id}>

                <CardHeader flexDirection={"row"}>
                  <Flex align={"center"}>

                    <NextLink href="/organization/[id]" as={`/organization/${o.id}`}>
                      <Link>
                        <Heading size='lg'>Name: {o.name}</Heading>
                      </Link>
                    </NextLink>
                    <StarSection organization={o} />
                    {meData?.me?.id === o.creatorId ?
                      <IconButton icon={<DeleteIcon />} aria-label="Delete Organization" onClick={() => {
                        deleteOrganization({
                          variables: { id: o.id },
                          update: (cache) => cache.evict({ id: "Organization:" + o.id })
                        })
                      }} /> : null}
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
            )}</Stack>
          {data && data.organizations.hasMore ?
            <Flex mt={8}>
              <Button my={8} m="auto" onClick={() => {
                fetchMore({
                  variables: {
                    limit: variables?.limit,
                    cursor: data.organizations.organizations[data.organizations.organizations.length - 1].createdAt
                  }
                })
              }}>Load More</Button>
            </Flex> : null}
        </Box> : null
      }
    </Wrapper >
  )
};

export default withApollo({ srr: true })(Index);
