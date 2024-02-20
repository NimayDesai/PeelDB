import {
    Alert,
    AlertIcon,
    AlertTitle, Box, Button, Container, HStack, Heading, Link, Stack
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { NextPage } from 'next';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { PasswordField } from '../../components/PasswordField';
import { useChangePasswordMutation } from '../../gql/generated/graphql';
import { toErrorMap } from '../../utils/toErrorMap';



const ChangePassword: NextPage<{ token: string }> = ({ token }) => {
    const [domLoaded, setDomLoaded] = useState(false);
    const [changePassword] = useChangePasswordMutation();
    const router = useRouter();
    const [tokenError, setTokenError] = useState('');

    useEffect(() => {
        setDomLoaded(true);
    }, []);
    return (
        <>
            {domLoaded ?
                <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
                    <Stack spacing="8">
                        <Stack spacing="6">
                            <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                                <Heading size={{ base: 'lg', md: '2xl' }}>Change Password</Heading>
                            </Stack>
                        </Stack>
                        <Box
                            py={{ base: '0', sm: '8' }}
                            px={{ base: '4', sm: '10' }}
                            bg={{ base: 'transparent', sm: 'bg.surface' }}
                            boxShadow={{ base: 'none', sm: 'md' }}
                            borderRadius={{ base: 'none', sm: 'xl' }}
                        >
                            <Formik initialValues={{ newPassword: "", confirmNewPassword: '', }} onSubmit={async (values, { setErrors }) => {
                                const response = await changePassword({ variables: { newPassword: values.newPassword, confirmNewPassword: values.confirmNewPassword, token } });
                                if (response.data?.changePassword.errors) {
                                    const errorMap = toErrorMap(response.data.changePassword.errors)
                                    if ('token' in errorMap) {
                                        setTokenError(errorMap.token)
                                    }
                                    setErrors(errorMap);
                                } else if (response.data?.changePassword.user) {
                                    router.push('/');
                                }
                            }}>
                                {({ isSubmitting }) => (
                                    <Form>
                                        <Stack spacing="6">
                                            <Stack spacing="5">
                                                <PasswordField name='newPassword' placeholder='New Password' label='New Password' />
                                                <PasswordField name='confirmNewPassword' placeholder='New Password' label='Confirm Password' />
                                            </Stack>
                                            <HStack justify="space-between">
                                            </HStack>
                                            {tokenError ?
                                                <Alert status='error'>
                                                    <AlertIcon />
                                                    <AlertTitle>{tokenError}</AlertTitle>
                                                    <NextLink href={"/forgot-password"}><Link>Get new link</Link></NextLink>
                                                </Alert> : null}
                                            <Stack spacing="6">
                                                <Button type='submit' colorScheme={'teal'} isLoading={isSubmitting}>Change Password</Button>
                                            </Stack>
                                        </Stack>
                                    </Form>
                                )}
                            </Formik>
                        </Box>
                    </Stack>
                </Container> : null}</>
    );
}

ChangePassword.getInitialProps = ({ query }) => {
    return {
        token: query.token as string
    }
}
export default ChangePassword;