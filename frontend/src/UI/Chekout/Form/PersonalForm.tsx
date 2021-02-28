import React from "react";
import { FormGroup } from "../../Form/FormGroup";
import { SectionLine } from "../../Form/SectionLine";
import { TextField } from "../../Form/TextField";

export type PersonalFormProps = {

}

export const PersonalForm: React.FC<PersonalFormProps> = ({  }) => {

    return (
        <FormGroup>
            <SectionLine text="Dados Pessoais" />
            <TextField placeholder="Nome" />
            <TextField placeholder="Email"/>
            <FormGroup row>
                <TextField width={32} placeholder="DDD"/>
                <TextField placeholder="Telefone"/>
            </FormGroup>
            <TextField placeholder="CPF"/>
        </FormGroup>
    );

}