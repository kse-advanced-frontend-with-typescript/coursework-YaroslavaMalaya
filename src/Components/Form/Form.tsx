import React, { useState } from 'react';
import {
    FormContainer,
    Title,
    InputsWrapper,
    Label,
    Input
} from './Form.styles';
import { Button } from '../ActiveButton/Button';

type SubmitData = {
    firstInput: string;
    secondInput: string;
};

type FormProps = {
    formName: 'login' | 'createCollection';
    onSubmit: (data: SubmitData) => void;
};

const formContentByName = {
    login: {
        title: 'Log in or create an account',
        firstInput: 'Email:',
        secondInput: 'Password:',
        buttonText: 'Log in / Create',
    },
    createCollection: {
        title: 'Or create a new collection',
        firstInput: 'Name:',
        secondInput: 'Description:',
        buttonText: 'Create',
    },
};

export const Form: React.FC<FormProps> = ({ formName, onSubmit }) => {
    const formContent = formContentByName[formName];
    const [firstInput, setFirstInput] = useState('');
    const [secondInput, setSecondInput] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit?.({ firstInput, secondInput });
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <Title>{formContent.title}</Title>
            <InputsWrapper>
            <Label>{formContent.firstInput}</Label>
            <Input
                value={firstInput}
                placeholder={formContent.firstInput.slice(0, -1).toLowerCase()}
                onChange={(event) => setFirstInput(event.target.value)}
                type="text"
            />
            <Label>{formContent.secondInput}</Label>
            <Input
                value={secondInput}
                placeholder={formContent.secondInput.slice(0, -1).toLowerCase()}
                onChange={(event) => setSecondInput(event.target.value)}
                type={formName === 'login' ? 'password' : 'text'}
            />
            </InputsWrapper>
            <Button
                text={formContent.buttonText}
                primary={true}
                onClick={() => onSubmit({ firstInput, secondInput })}
            />
        </FormContainer>
    );
};
