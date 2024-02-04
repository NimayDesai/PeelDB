import React from 'react'
import { withApollo } from '../../utils/withApollo';
import { useRouter } from 'next/router';
import { useOrganizationQuery } from '../../gql/generated/graphql';
import { Box, Card, CardBody, CardHeader, Flex, Heading, Link, Stack, StackDivider, Text } from '@chakra-ui/react';
import { StarSection } from '../../components/StarSection';
import NextLink from 'next/link'
import { Wrapper } from '../../components/Wrapper';



const Organization: React.FC<{}> = ({ }) => {
    const router = useRouter();
    const intId = typeof router.query.id === "string" ? parseInt(router.query.id) : -1
    const { data, loading, error } = useOrganizationQuery({
        skip: intId === -1,
        variables: {
            id: intId
        }
    })

    if (error) {
        return <div>{error.message}</div>
    }

    if (!data?.organization) {
        return <div>Could Not Find that Post</div>
    }
    return (
        <Wrapper>
            <Card mt={8}>
                <CardHeader flexDirection={"row"}>
                    <Flex align={"center"}>
                        <Heading size='lg'>Name: {data?.organization?.name}</Heading>
                    </Flex>

                    <Heading size='sm' mt={2}>Added by: {data?.organization?.creator.username}</Heading>

                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Type of Organization
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                {data?.organization?.typeOfOrganization}
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Email
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                {data?.organization?.email}
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Contact Info
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                {data?.organization?.phoneNumber}
                            </Text>
                            <Text pt='2' fontSize='sm'>
                                {data?.organization?.address}
                            </Text>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </Wrapper>
    );
}

export default withApollo({ ssr: true })(Organization);