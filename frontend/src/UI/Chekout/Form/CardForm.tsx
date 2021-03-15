import React from "react";
import { FormGroup } from "../../Form/FormGroup";
import { SectionLine } from "../../Form/SectionLine";
import { TextField } from "../../Form/TextField";
import { CostumerFormData } from "./CostumerFormData";
import { CardNumberMasker, CVVMasker, ExpireDateMasker, CardHolderMasker } from "./Maskers";

export type CardCostumerData = Partial<Pick<CostumerFormData, "card">>;

export type CardFormProps = {
    onChange: (card: CardCostumerData) => void;
}

export const CardForm: React.FC<CardFormProps> = ({ onChange }) => {

    const [card, setCard] = React.useState<CardCostumerData>({});

    React.useEffect(() => {
        onChange(card);
    }, [card]);

    const setField = (field: any) => {
        setCard({ ...card, ...field });
    }

    return (
        <FormGroup>
            <SectionLine text="Cartão" />
            <TextField placeholder="Número do Cartão" onChange={ v => setField({ number: v }) } masker={ new CardNumberMasker } />
            <TextField placeholder="Nome impresso no cartão" onChange={ v => setField({ name: v }) } masker={ new CardHolderMasker } />
            <TextField placeholder="CVV" onChange={ v => setField({ cvv: v }) } masker={ new CVVMasker } />
            <FormGroup row>
                <TextField width={64} placeholder="mm/aa" onChange={ v => setField({ expireDate: v }) } masker={ new ExpireDateMasker } />
            </FormGroup>
        </FormGroup>
    );
}