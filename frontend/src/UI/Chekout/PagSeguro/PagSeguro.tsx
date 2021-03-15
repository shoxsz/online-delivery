import React from "react";
import { pagContext, PagSeguroContext } from "./PagSeguroContext";
import { PagSeguroForm } from "./PagSeguroForm";
import { usePagScript } from "./usePagScript";

export type PagSeguroProps = {

}

export const PagSeguro: React.FC<PagSeguroProps> = () => {

    const pagScript = usePagScript();
    const pag = React.useContext(pagContext);

    React.useEffect(() => {
        
        pagScript
        .loadPagSeguro()
        .then((data) => {
            pag?.initSession()
            .then(async sessionID => {
                
            });
        })
        .catch(() => {

        });

        return pagScript.unloadPagSeguro;
    }, []);

    const loading = pagScript.isLoaded() && pag?.hasSession();

    return (
        <PagSeguroContext>
            {
                !loading &&
                <div className="PagSeguro">
                    <PagSeguroForm/>
                </div>
            }
            {
                loading && 
                <div>Carregando formulário</div>
            }
        </PagSeguroContext>
    );

}