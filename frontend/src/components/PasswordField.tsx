import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    useDisclosure
} from '@chakra-ui/react'
import { useField } from 'formik'
import { InputHTMLAttributes, useRef } from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'

type PasswordFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string
    label: string;
}

export const PasswordField: React.FC<PasswordFieldProps> = ({ label, size: _, ...props }) => {
    const [field, { error }] = useField(props)
    const { isOpen, onToggle } = useDisclosure()
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickReveal = () => {
        onToggle()
        if (inputRef.current) {
            inputRef.current.focus({ preventScroll: true })
        }
    }

    return (
        <FormControl isInvalid={!!error}>
            <FormLabel htmlFor={field.name}>{label}</FormLabel>
            <InputGroup>
                <InputRightElement>
                    <IconButton
                        variant="text"
                        aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                        icon={isOpen ? <HiEyeOff /> : <HiEye />}
                        onClick={onClickReveal}
                    />
                </InputRightElement>
                <Input
                    {...field}
                    {...props}
                    id={field.name}
                    placeholder={props.placeholder}
                    type={isOpen ? 'text' : 'password'}
                    autoComplete="current-password"
                />
            </InputGroup>
            {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
        </FormControl>
    )
}