import React from "react";
import { PagSeguroAPI } from "../../../client/API/PagSeguro";
import { CostumerForm } from "../Form/CostumerForm";
import { pagContext } from "./PagSeguroContext";

export const PagSeguroForm: React.FC = () => {

    const pag = React.useContext(pagContext);

    React.useEffect(() => {
        pag?.initSession()
        .then(async sessionID => {});
    }, []);

    return (
        <CostumerForm/>
    );
}