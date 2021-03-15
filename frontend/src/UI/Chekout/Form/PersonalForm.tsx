import React from "react";
import { FormGroup } from "../../Form/FormGroup";
import { SectionLine } from "../../Form/SectionLine";
import { TextField } from "../../Form/TextField";
import { CostumerFormData } from "./CostumerFormData";
import { CPFMasker, DDDMasker, LengthMasker, PhoneMasker } from "./Maskers";

export type PersonalCostumerData = Partial<Pick<CostumerFormData, "name" | "email" | "phone" | "cpf">>;

export type PersonalFormProps = {
    onChange: (costumer: PersonalCostumerData) => void;
};

export const PersonalForm: React.FC<PersonalFormProps> = ({ onChange }) => {

    const [personal, setPersonal] = React.useState<PersonalCostumerData>({});
    const [ddd, setDDD] = React.useState("");
    const [phone, setPhone] = React.useState("");

    React.useEffect(() => {
        onChange(personal);
    }, [personal]);

    const setField = (field: any) => {
        setPersonal({...personal, ...field});
    }

    const handleDDD = (ddd: string) => {
        setDDD(ddd);
        setField({ phone: `${ddd}${phone}` });
    }

    const handlePhone = (phone: string) => {
        setPhone(phone);
        setField({ phone: `${ddd}${phone}` });
    }

    return (
        <FormGroup>
            <SectionLine text="Dados Pessoais" />
            <TextField placeholder="Nome" onChange={ e => setField({ name: e }) } masker={ new LengthMasker(50) }/>
            <TextField placeholder="Email" onChange={ e => setField({ email: e }) } masker={ new LengthMasker(50) }/>
            <FormGroup row>
                <TextField width={32} placeholder="DDD" onChange={ handleDDD } masker={ new DDDMasker() }/>
                <TextField placeholder="Telefone" onChange={ handlePhone } masker={ new PhoneMasker() } />
            </FormGroup>
            <TextField placeholder="CPF" onChange={ e => setField({ cpf: e }) } masker={ new CPFMasker() } />
        </FormGroup>
    );

}