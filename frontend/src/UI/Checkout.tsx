import React from "react";
import { useApp } from "../App/useApp";

export type CheckoutProps = {

}

export const Checkout: React.FC<CheckoutProps> = ({  }) => {

    const app = useApp();

    return (
        <div onClick={ () => app.popScreen?.() }>
            OI
        </div>
    );
}