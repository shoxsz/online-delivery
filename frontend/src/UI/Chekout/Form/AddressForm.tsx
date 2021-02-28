import React from "react";
import { FormGroup } from "../../Form/FormGroup";
import { SectionLine } from "../../Form/SectionLine";
import { TextField } from "../../Form/TextField";

export type AddressFormProps = {

};

export const AddressForm: React.FC<AddressFormProps> = ({  }) => {
    return (
        <FormGroup>
            <SectionLine text="Endereço" />
            <TextField placeholder="CEP"/>
            <TextField placeholder="Rua Jobina cruz, Av. Florispe Crispim"/>
            <TextField placeholder="Número"/>
            <TextField placeholder="Bairro" />
            <TextField placeholder="Complemento" />
        </FormGroup>
    );
}