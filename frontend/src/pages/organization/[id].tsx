import { Box, Card, CardBody, CardHeader, Flex, Heading, Stack, StackDivider, Text } from '@chakra-ui/react';
import React from 'react';
import { StarSection } from '../../components/StarSection';
import { Wrapper } from '../../components/Wrapper';
import { useGetOrganizationFromUrl } from '../../utils/useGetOrganizationFromUrl';
import { withApollo } from '../../utils/withApollo';


const Organization: React.FC<{}> = ({ }) => {
    const { data, error } = useGetOrganizationFromUrl();

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
                        <StarSection isOnMainPage={false} organization={data?.organization} />
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
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Description
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                {data.organization.description}
                            </Text>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </Wrapper>
    );
}

export default withApollo({ ssr: true })(Organization);