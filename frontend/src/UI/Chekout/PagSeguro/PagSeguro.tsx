import React from "react";
import { TextField } from "../../Form/TextField";
import { CostumerForm } from "../Form/CostumerForm";
import { usePagScript } from "./usePagScript";

export type PagSeguroProps = {

}

export const PagSeguro: React.FC<PagSeguroProps> = () => {

    const pagScript = usePagScript();

    React.useEffect(() => {
        
        pagScript
        .loadPagSeguro()
        .then((data) => {

        })
        .catch(() => {

        });

        return pagScript.unloadPagSeguro;
    }, []);

    return (
        <div className="PagSeguro">
            <CostumerForm/>
        </div>
    );

}