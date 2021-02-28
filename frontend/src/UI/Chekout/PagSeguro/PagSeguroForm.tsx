import React from "react";
import { CostumerForm } from "../Form/CostumerForm";
import { pagContext } from "./PagSeguroContext";

export const PagSeguroForm: React.FC = () => {

    const pag = React.useContext(pagContext);

    React.useEffect(() => { 
        pag?.initSession()
        .then(sessionID => {
            //config pagseguro with session ID
        });
    }, []);

    return (
        <CostumerForm/>
    );
}