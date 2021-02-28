import React from "react";

export const usePagScript = () => {

    const [script, setScript] = React.useState<HTMLScriptElement>();

    const loadPagSeguro = () => {
        const script = document.createElement("script");
        script.src = "https://stc.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js";

        const promise = new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = reject;
        });

        document.body.appendChild(script);
        setScript(script);

        return promise;
    }

    const unloadPagSeguro = () => {
        if(script) {
            document.body.removeChild(script);
        }
    }

    return {
        loadPagSeguro,
        unloadPagSeguro
    }

}