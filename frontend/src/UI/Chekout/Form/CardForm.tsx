import React from "react";
import { FormGroup } from "../../Form/FormGroup";
import { SectionLine } from "../../Form/SectionLine";
import { TextField } from "../../Form/TextField";

export type CardFormProps = {

}

export const CardForm: React.FC<CardFormProps> = ({  }) => {
    return (
        <FormGroup>
            <SectionLine text="Cartão" />
            <TextField placeholder="Número do Cartão" />
            <TextField placeholder="Nome impresso no cartão"/>
            <TextField placeholder="CVV" />
            <FormGroup row>
                <TextField width={64} placeholder="mm/aa"/>
            </FormGroup>
        </FormGroup>
    );
}