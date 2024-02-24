import { Box, Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { InputField } from '../../components/InputField';
import { Wrapper } from '../../components/Wrapper';
import { useOrganizationQuery, useUpdateOrganizationMutation } from '../../gql/generated/graphql';
import { useGetIntId } from '../../utils/useGetIntId';


const UpdateOrganization: React.FC<{}> = ({ }) => {
    const router = useRouter();
    const intId = useGetIntId();
    const [updateOrganization] = useUpdateOrganizationMutation();
    const { data, loading } = useOrganizationQuery({
        skip: intId === -1,
        variables: {
            id: intId
        }
    })
    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <Wrapper variant="small">
            <Formik
                initialValues={{
                    name: data?.organization?.name,
                    typeOfOrganization: data?.organization?.typeOfOrganization,
                    email: data?.organization?.email,
                    address: data?.organization?.address,
                    phoneNumber: data?.organization?.phoneNumber,
                    description: data?.organization?.description
                }}
                onSubmit={async (values) => {
                    await updateOrganization({
                        variables: { input: values, id: intId },
                        update: (cache) => {
                            cache.evict({ fieldName: "organizations:{}" });
                        },
                    });
                    router.push('/');
                }
                }
            >
                {({ isSubmitting }) => (
                    <Form>
                        <InputField name="name" placeholder="Bob Inc.." label="Name" />
                        <Box mt={4}>
                            <InputField
                                name="typeOfOrganization"
                                placeholder="Non Profit..."
                                label="Type Of Organization"
                            />
                        </Box>
                        <Box mt={4}>
                            <InputField
                                name="address"
                                placeholder="1 Seasame Street..."
                                label="Address"
                            />
                        </Box>
                        <Box mt={4}>
                            <InputField
                                name="email"
                                placeholder="bob@bob.com..."
                                label="Email"
                            />
                        </Box>
                        <Box mt={4}>
                            <InputField
                                name="phoneNumber"
                                placeholder="123-456-7890..."
                                label="Phone Number"
                            />
                        </Box>
                        <Box mt={4}>
                            <InputField
                                name="description"
                                placeholder="Lorem Ipsum..."
                                label="Description"
                            />
                        </Box>
                        <Button
                            mt={4}
                            type="submit"
                            isLoading={isSubmitting}
                            colorScheme="green"
                        >
                            Update Organization
                        </Button>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    );
}


export default UpdateOrganization;