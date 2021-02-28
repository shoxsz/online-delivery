import React from "react";
import { PagSeguroContext } from "./PagSeguroContext";
import { PagSeguroForm } from "./PagSeguroForm";
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
        <PagSeguroContext>
            <div className="PagSeguro">
                <PagSeguroForm/>
            </div>
        </PagSeguroContext>
    );

}