import {
    Box,
    Button,
    Container,
    Heading,
    HStack,
    InputProps,
    Stack
} from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import { forwardRef } from 'react'
import { InputField } from '../components/InputField'
import { PasswordField } from '../components/PasswordField'
import { Wrapper } from '../components/Wrapper'
import { useChangeInfoMutation, useMeQuery } from '../gql/generated/graphql'
import { toErrorMap } from '../utils/toErrorMap'

const Register = forwardRef<HTMLInputElement, InputProps>(() => {
    const [changeInfo,] = useChangeInfoMutation();
    const router = useRouter();
    const { data, loading } = useMeQuery();

    if (!data?.me && !loading) {
        router.push('/');
    }

    return (
        <Wrapper>
            (<Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }
            }>
                <Stack spacing="8">
                    <Stack spacing="6">
                        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                            <Heading size={{ base: 'lg', md: '2xl' }}>Change Info</Heading>
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
                                            <Button type='submit' colorScheme={'teal'} isLoading={isSubmitting}>Change Info</Button>
                                        </Stack>
                                    </Stack>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Stack>
            </Container>
        </Wrapper>
    )
})

export default Register;