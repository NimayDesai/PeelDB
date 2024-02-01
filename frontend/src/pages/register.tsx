import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    InputProps,
    Link,
    Stack,
    Text,
    useDisclosure,
    useMergeRefs
} from '@chakra-ui/react'
import { Form, Formik, useField } from 'formik'
import { forwardRef, useEffect, useRef, useState } from 'react'
import { PasswordField } from '../components/PasswordField'
import { InputField } from '../components/InputField'
import { gql, useMutation } from '@apollo/client'
import { MeDocument, MeQuery, useRegisterMutation } from '../gql/generated/graphql'
import { toErrorMap } from '../utils/toErrorMap'
import { useRouter } from 'next/router'
import NextLink from 'next/link';

const Register = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { isOpen, onToggle } = useDisclosure()
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);
    const inputRef = useRef<HTMLInputElement>(null)
    const [register,] = useRegisterMutation();
    const router = useRouter();

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
                                <Formik initialValues={{ username: "", password: "" }} onSubmit={async (values, { setErrors }) => {
                                    const response = await register({
                                        variables: values,
                                        update: (cache, { data }) => {
                                            cache.writeQuery<MeQuery>({
                                                query: MeDocument,
                                                data: {
                                                    __typename: "Query",
                                                    me: data?.register.user,
                                                },
                                            });
                                        },
                                    });
                                    if (response.data?.register.errors) {
                                        setErrors(toErrorMap(response.data.register.errors));
                                    } else if (response.data?.register.user) {
                                        router.push('/')
                                    }
                                }}>
                                    {({ isSubmitting }) => (
                                        <Form>
                                            <Stack spacing="6">
                                                <Stack spacing="5">
                                                    <InputField name='username' placeholder='Harold M. Brathwaitte S.S' label='School Name'></InputField>
                                                    <PasswordField name='password' placeholder='Password' label='Password' />
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

export default Register