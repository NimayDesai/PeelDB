import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Box,
    Button,
    Container,
    Heading,
    HStack,
    InputProps,
    Stack,
    Text,
    useDisclosure
} from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import { forwardRef } from 'react'
import { InputField } from '../components/InputField'
import { PasswordField } from '../components/PasswordField'
import { Wrapper } from '../components/Wrapper'
import { useChangeInfoMutation, useDeleteUserMutation, useMeQuery } from '../gql/generated/graphql'
import { toErrorMap } from '../utils/toErrorMap'
import { useIsAuth } from '../utils/useIsAuth'
import { DeleteIcon } from '@chakra-ui/icons'
import React from 'react'

const Register = forwardRef<HTMLInputElement, InputProps>(() => {
    const [changeInfo,] = useChangeInfoMutation();
    const [deleteUser] = useDeleteUserMutation();
    const router = useRouter();
    const { data } = useMeQuery();
    const { isOpen, onClose, onOpen } = useDisclosure();
    const cancelRef: any = React.useRef()

    useIsAuth();


    return (
        <Wrapper>
            <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }
            } textAlign={"center"}>
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
                            // Change info with the values
                            const response = await changeInfo({
                                variables: { input: values }
                            });
                            // If errors set the error for the user to see

                            if (response.data?.changeInfo.errors) {
                                setErrors(toErrorMap(response.data.changeInfo.errors));
                            } else if (response.data?.changeInfo.user) {
                                // If user is returned go back to the main page
                                router.push('/app')
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
                                            <Button type='submit' colorScheme={'green'} isLoading={isSubmitting}>Change Info</Button>
                                        </Stack>
                                    </Stack>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                    <Button aria-label="Delete Organization" maxW="300px" alignSelf={"center"} leftIcon={<DeleteIcon width={25} h={25} />} colorScheme='red' px={10} py={10} onClick={onOpen}><Text fontSize={"x-large"}>Delete Account</Text></Button>
                    <AlertDialog
                        isOpen={isOpen}
                        leastDestructiveRef={cancelRef}
                        onClose={onClose}
                    >
                        <AlertDialogOverlay>
                            <AlertDialogContent>
                                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                    Delete Account
                                </AlertDialogHeader>

                                <AlertDialogBody>
                                    Are you sure you want to delete your account? This action cannot be undoed,
                                    and all the organizations you have added will be deleted
                                </AlertDialogBody>

                                <AlertDialogFooter>
                                    <Button ref={cancelRef} onClick={onClose}>
                                        Cancel
                                    </Button>
                                    <Button colorScheme='red' onClick={async () => {
                                        // Delete user and update the cache by evicting the deleted User and going back to the main page
                                        await deleteUser({
                                            update: (cache) => cache.evict({ id: "User:" + data?.me?.id })
                                        })
                                        router.push('/');
                                    }} ml={3}>
                                        Delete
                                    </Button>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialogOverlay>
                    </AlertDialog>
                </Stack>
            </Container>
        </Wrapper>
    )
})

export default Register;