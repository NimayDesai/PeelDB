import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useOrganizationsQuery } from "../gql/generated/graphql";
import { withApollo } from "../utils/withApollo";
import { Wrapper } from "../components/Wrapper";

const Index = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const { data } = useOrganizationsQuery();
  console.log(data);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <Wrapper>
      {domLoaded ?
        <>
          {!data ? null : data?.organizations.map(o => (
            <Card key={o.id}>
              <CardHeader>
                <Heading size='md'>{o.name}</Heading>
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
        </> : null}
    </Wrapper>
  )
};

export default withApollo({ srr: true })(Index);
