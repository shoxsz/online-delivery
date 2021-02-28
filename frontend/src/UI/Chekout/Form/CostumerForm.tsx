import React from "react";
import { CollapseButton } from "../../Buttons/CollapseButton";
import { CartOrders } from "../../Cart/Orders/CartOrders";
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
            </form>
        </div>
    );
}