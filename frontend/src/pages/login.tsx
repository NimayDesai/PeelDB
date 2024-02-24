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

    // When the user loads the page, it sets DomLoaded to true
    // Onlt if content is loaded, it will display the component
    // This to avoid an error that is occuring in React 18
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
                                <Text color="fg.muted">
                                    Forgot Password? <NextLink href="/forgot-password"><Link mr={8}>Click Here</Link></NextLink>
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
                                // Send the login mutation to GraphQL with the values from the user
                                // After the update, it runs the Me Query, and updates the cache with
                                // the new user without having to refresh the page which is slower
                                // It also evicts all the organizations due to the delete, edit, and star butto needing a logged in user
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
                                // If there are any errors display them
                                if (response.data?.login.errors) {
                                    setErrors(toErrorMap(response.data.login.errors));
                                }
                                // If we get a user back
                                else if (response.data?.login.user) {
                                    // If there is a ?next= in the url then push to that url
                                    if (typeof router.query.next === 'string') {
                                        router.push(router.query.next)
                                    } else {
                                        // Else go to the home page
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
                                                <Button type='submit' colorScheme={'green'} isLoading={isSubmitting}>Login</Button>
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