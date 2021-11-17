import React from 'react';
import HookForm from './HookForm'
import CustomInput from './Input';
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button
  } from "@chakra-ui/react";

type Config = {
    name: {
        first: string,
        last: string,
    },
    email: string,
    age: number
}

const defaultValues: Config = {
    name: {
        first: 'John',
        last: 'Smith'
    },
    email: 'john@smith.com',
    age: 29
}

type LoginFormProps = {
    onSuccess: () => void;
  };

const ExampleForm = () => {

    return (
        <HookForm<Config> 
        onSubmit={(values: Config) => { console.log(values)
        }} options={{defaultValues}}>
            {({register, formState}) => (
                <>
                    <CustomInput type={'text'} label="First Name" registration={register('name.first', {required: "required"})}/>
                    <CustomInput type={'text'} label="Last Name" registration={register('name.last')}/>
                    <Button type="submit" >
                        Submit
                    </Button>
                </>
            )}
        </HookForm>
    )
}

export default ExampleForm