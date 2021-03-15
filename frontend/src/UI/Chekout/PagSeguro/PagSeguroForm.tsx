import React from "react";
import { CostumerForm } from "../Form/CostumerForm";
import { CostumerFormData } from "../Form/CostumerFormData";
import { pagContext } from "./PagSeguroContext";

export const PagSeguroForm: React.FC = () => {

    const handleChange = (costumer: Partial<CostumerFormData>) => {

    }

    const validate = (costumer: Partial<CostumerFormData>) => {
        return {};
    }

    const submitForm = (costumer: Partial<CostumerFormData>) => {

    }

    return (
        <CostumerForm
            onChange={handleChange}
            validate={validate}
            onSubmit={submitForm}/> 
    );
}