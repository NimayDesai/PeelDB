import {
    Box,
    Button,
    Container,
    Heading,
    HStack,
    InputProps,
    Link,
    Stack,
    Text,
    useDisclosure
} from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { forwardRef, useEffect, useRef, useState } from 'react'
import { InputField } from '../components/InputField'
import { PasswordField } from '../components/PasswordField'
import { MeDocument, MeQuery, useChangeInfoMutation, useMeQuery } from '../gql/generated/graphql'
import { toErrorMap } from '../utils/toErrorMap'

const Register = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);
    const [changeInfo,] = useChangeInfoMutation();
    const router = useRouter();
    const { data, loading } = useMeQuery();

    if (!data?.me && !loading) {
        router.push('/');
    }

    return (
        <>
            {
                domLoaded ?
                    (<Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }
                    }>
                        <Stack spacing="8">
                            <Stack spacing="6">
                                <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                                    <Heading size={{ base: 'lg', md: '2xl' }}>Register</Heading>
                                    <Text color="fg.muted">
                                        Already have a school acount? <NextLink href="/login"><Link mr={8}>Log in</Link></NextLink>
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
                                <Formik initialValues={{ username: "", password: "", confirmPassword: "", email: "", }} onSubmit={async (values, { setErrors }) => {
                                    const response = await changeInfo({
                                        variables: { input: values }
                                    });
                                    if (response.data?.changeInfo.errors) {
                                        setErrors(toErrorMap(response.data.changeInfo.errors));
                                    } else if (response.data?.changeInfo.user) {
                                        router.push('/')
                                    }
                                }}>
                                    {({ isSubmitting }) => (
                                        <Form>
                                            <Stack spacing="6">
                                                <Stack spacing="5">
                                                    <InputField name='username' placeholder='Harold M. Brathwaitte S.S' label='School Name'></InputField>
                                                    <InputField name='email' placeholder='School Email' label='School Email'></InputField>
                                                    <PasswordField name='password' placeholder='Password' label='Password' />
                                                    <PasswordField name='confirmPassword' placeholder='Confirm Password' label='Confirm Password' />
                                                </Stack>
                                                <HStack justify="space-between">
                                                </HStack>
                                                <Stack spacing="6">
                                                    <Button type='submit' colorScheme={'teal'} isLoading={isSubmitting}>Register</Button>
                                                </Stack>
                                            </Stack>
                                        </Form>
                                    )}
                                </Formik>
                            </Box>
                        </Stack>
                    </Container >) : null}</>
    )
})

export default Register;