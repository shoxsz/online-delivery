import React from "react";
import { Customer } from "../../Types/Costumer";
import { AddressForm } from "./AddressForm";
import { CardForm } from "./CardForm";
import { PersonalForm } from "./PersonalForm";

export type CostumerFormProps = {

}

export const CostumerForm: React.FC<CostumerFormProps> = ({  }) => {

    return (
        <div className="CostumerForm">
            <form>
                <PersonalForm/>
                <AddressForm/>
                <CardForm/>
            </form>
        </div>
    );
}