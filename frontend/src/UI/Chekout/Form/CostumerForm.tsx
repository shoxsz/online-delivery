import React from "react";
import { Button } from "../../Form/Button";
import { AddressForm } from "./AddressForm";
import { CardForm } from "./CardForm";
import { CostumerCart } from "./CostumerCart";
import { PersonalForm } from "./PersonalForm";

export type CostumerFormProps = {

}

export const CostumerForm: React.FC<CostumerFormProps> = ({  }) => {

    return (
        <div className="CostumerForm">
            <CostumerCart/>
            <form>
                <PersonalForm/>
                <AddressForm/>
                <CardForm/>
                <Button onClick={ e => e.preventDefault() }>
                    Confirmar compra
                </Button>
            </form>
        </div>
    );
}