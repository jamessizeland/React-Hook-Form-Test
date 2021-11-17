import React, {HTMLInputTypeAttribute} from 'react';
import {UseFormRegisterReturn, FieldError} from 'react-hook-form';
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button
  } from "@chakra-ui/react";

interface InputFieldProps {
    registration: Partial<UseFormRegisterReturn>
    label?: string;
    error?: FieldError | undefined;
    description?: string;
    type?: HTMLInputTypeAttribute;
}

  const CustomInput = ({label, error, registration, description, type='text'}: InputFieldProps) => {
    return (
        <FormControl>
            <FormLabel htmlFor={description}>{label}</FormLabel>
            <Input
                type={type}
                id={label}
                {...registration}
            />
            <FormErrorMessage>
            {error?.message}
          </FormErrorMessage>
        </FormControl>
    )
  };

  export default CustomInput;