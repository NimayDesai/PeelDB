import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Textarea
} from '@chakra-ui/react'
import { useField } from 'formik'
import { InputHTMLAttributes } from 'react'

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string
    label?: string;
    placeholder: string;
    textarea?: boolean
}

export const InputField: React.FC<InputFieldProps> = ({ label, size: _, textarea, ...props }) => {
    const [field, { error }] = useField(props)
    let Component: any = Input;
    if (textarea) {
        Component = Textarea;
    }

    return (
        <FormControl isInvalid={!!error}>
            {label ? <FormLabel htmlFor={field.name}>{label}</FormLabel> : null}
            <Component
                {...field}
                {...props}
                id={field.name}
                placeholder={props.placeholder}
            />
            {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
        </FormControl>
    )
}