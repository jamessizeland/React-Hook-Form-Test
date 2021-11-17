import { useForm, UseFormProps, SubmitHandler, UseFormReturn } from "react-hook-form";
import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button
} from "@chakra-ui/react";

type FormProps<TFormValues> = {
    className?: string;
    onSubmit: SubmitHandler<TFormValues>;
    children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
    options?: UseFormProps<TFormValues>;
    id?: string;
    // schema?: Schema;
  };



const HookForm = <TFormValues extends Record<string, unknown> = Record<string, unknown>
  >
  ({  
    onSubmit,
    children,
    className,
    options,
    id,
  }: FormProps<TFormValues>) => {
const methods = useForm<TFormValues>({ ...options });
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} id={id}>
        {children(methods)}
    </form>
  );
}

export default HookForm;