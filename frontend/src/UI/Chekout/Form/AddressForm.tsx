import React from "react";
import { FormGroup } from "../../Form/FormGroup";
import { SectionLine } from "../../Form/SectionLine";
import { TextField } from "../../Form/TextField";
import { CostumerFormData } from "./CostumerFormData";
import { CEPMasker } from "./Maskers";

export type AddressCostumerData = Partial<Pick<CostumerFormData, "address">>;

export type AddressFormProps = {
    onChange: (address: AddressCostumerData) => void;
};

export const AddressForm: React.FC<AddressFormProps> = ({ onChange }) => {

    const [address, setAddress] = React.useState({});

    React.useEffect(() => {
        
    }, [address]);

    const setField = (field: any) => {
        setAddress({ ...address, ...field });
    }

    return (
        <FormGroup>
            <SectionLine text="Endereço" />
            <TextField placeholder="CEP" onChange={ v => setField({ cep: v }) } masker={ new CEPMasker }/>
            <TextField placeholder="Rua Jobina cruz, Av. Florispe Crispim" onChange={ v => setField({ street: v }) }/>
            <TextField placeholder="Número" onChange={ v => setField({ number: v }) }/>
            <TextField placeholder="Bairro" onChange={ v => setField({ neighborhood: v }) }/>
            <TextField placeholder="Complemento" onChange={ v => setField({ complement: v }) }/>
        </FormGroup>
    );
}