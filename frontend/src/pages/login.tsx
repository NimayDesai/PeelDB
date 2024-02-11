import {
    Box,
    Button,
    Container,
    Heading,
    HStack,
    Link,
    Stack,
    Text
} from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { forwardRef, useEffect, useState } from 'react'
import { InputField } from '../components/InputField'
import { PasswordField } from '../components/PasswordField'
import { MeDocument, MeQuery, useLoginMutation } from '../gql/generated/graphql'
import { toErrorMap } from '../utils/toErrorMap'

const Login = forwardRef<{}>(({ }) => {
    const [login,] = useLoginMutation();
    const router = useRouter();
    const [domLoaded, setDomLoaded] = useState(false);

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
                                <Heading size={{ base: 'lg', md: '2xl' }}>Login</Heading>
                                <Text color="fg.muted">
                                    Dont have an account yet? <NextLink href="/register"><Link mr={8}>Register</Link></NextLink>
                                </Text>
                            </Stack>
                        </Stack>
                        <Box
                            py={{ base: '0', sm: '8' }}
                            px={{ base: '4', sm: '10' }}
                            bg={{ base: 'transparent', sm: 'bg.surface' }}
                            boxShadow={{ base: 'none', sm: 'md' }}
                            borderRadius={{ base: 'none', sm: 'xl' }}
                        >
                            <Formik initialValues={{ usernameOrEmail: "", password: "" }} onSubmit={async (values, { setErrors }) => {
                                const response = await login({
                                    variables: { options: values },
                                    update: (cache, { data }) => {
                                        cache.writeQuery<MeQuery>({
                                            query: MeDocument,
                                            data: {
                                                __typename: "Query",
                                                me: data?.login.user,
                                            },
                                        });
                                        cache.evict({ fieldName: "posts:{}" });
                                    },
                                });
                                if (response.data?.login.errors) {
                                    setErrors(toErrorMap(response.data.login.errors));
                                } else if (response.data?.login.user) {
                                    if (typeof router.query.next === 'string') {
                                        router.push(router.query.next)
                                    } else {
                                        router.push('/')
                                    }
                                }
                            }}>
                                {({ isSubmitting }) => (
                                    <Form>
                                        <Stack spacing="6">
                                            <Stack spacing="5">
                                                <InputField name='usernameOrEmail' placeholder='Harold M. Brathwaitte S.S or bob@bob.com' label='School Name or Email'></InputField>
                                                <PasswordField name='password' placeholder='Password' label='Password' />
                                            </Stack>
                                            <HStack justify="space-between">
                                            </HStack>
                                            <Stack spacing="6">
                                                <Button type='submit' colorScheme={'teal'} isLoading={isSubmitting}>Login</Button>
                                            </Stack>
                                        </Stack>
                                    </Form>
                                )}
                            </Formik>
                        </Box>
                    </Stack>
                </Container> : null}</>
    )
})

export default Login;