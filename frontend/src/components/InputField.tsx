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

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string
    label: string;
    placeholder: string;
}

export const InputField: React.FC<InputFieldProps> = ({ label, size: _, ...props }) => {
    const [field, { error }] = useField(props)

    return (
        <FormControl isInvalid={!!error}>
            <FormLabel htmlFor={field.name}>{label}</FormLabel>
            <Input
                {...field}
                {...props}
                id={field.name}
                placeholder={props.placeholder}
            />
            {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
        </FormControl>
    )
}