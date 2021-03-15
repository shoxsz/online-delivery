import React from "react";
import { Button } from "../../Form/Button";
import { AddressForm } from "./AddressForm";
import { CardForm } from "./CardForm";
import { CostumerCart } from "./CostumerCart";
import { CostumerFormData, CostumerFormDataErrors } from "./CostumerFormData";
import { PersonalForm } from "./PersonalForm";

export type CostumerFormProps = {
    validate: (costumer: Partial<CostumerFormData>) => CostumerFormDataErrors | Promise<CostumerFormDataErrors>;
    onSubmit: (costumer: Partial<CostumerFormData>) => void | Promise<void>;
    onChange: (costumer: Partial<CostumerFormData>) => void;
}

export const CostumerForm: React.FC<CostumerFormProps> = ({ validate, onSubmit }) => {

    const [costumer, setCostumer] = React.useState<Partial<CostumerFormData>>({});
    const [error, setError] = React.useState<CostumerFormDataErrors>({});

    const handleClick = async (e: any) => {
        e.preventDefault();
        const error = await validate(costumer);
        if(Object.keys(error).length == 0) {
            onSubmit(costumer);
        } else {
            setError(error);
        }
    }

    const setCostumerData = (data: any) => {
        setCostumer({ ...costumer, ...data });
    }

    return (
        <div className="CostumerForm">
            <CostumerCart/>
            <form>
                <PersonalForm onChange={ setCostumerData }/>
                <AddressForm onChange={setCostumerData}/>
                <CardForm onChange={setCostumerData}/>
                <Button onClick={ handleClick }>
                    Confirmar compra
                </Button>
            </form>
        </div>
    );
}