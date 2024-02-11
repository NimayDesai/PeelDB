import { Box, Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { InputField } from '../components/InputField';
import { Wrapper } from '../components/Wrapper';
import { useAddOrganizationMutation } from '../gql/generated/graphql';
import { useIsAuth } from '../utils/useIsAuth';
import { withApollo } from '../utils/withApollo';


const CreateOrganization: React.FC<{}> = ({ }) => {
    const [addOrganization] = useAddOrganizationMutation();
    useIsAuth();
    const router = useRouter();
    return (
        <Wrapper variant="small">
            <Formik
                initialValues={{ name: "", typeOfOrganization: "", email: "", address: "", phoneNumber: "", }}
                onSubmit={async (values) => {
                    console.log(values);
                    const { errors } = await addOrganization({
                        variables: { input: values },
                        update: (cache) => {
                            cache.evict({ fieldName: "organizations:{}" });
                        },
                    });
                    if (!errors) {
                        router.push('/');
                    }

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
                        <Button
                            mt={4}
                            type="submit"
                            isLoading={isSubmitting}
                            colorScheme="teal"
                        >
                            Add Organization
                        </Button>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    );
};

export default withApollo({ ssr: false })(CreateOrganization);
