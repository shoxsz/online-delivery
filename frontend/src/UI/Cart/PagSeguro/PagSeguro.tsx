import React from "react";
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
            <form>
                <div>
                    <div>Nome</div>
                    <div>
                        <input type="text" />
                    </div>
                    <div>Email</div>
                    <div>
                        <input type="text" />
                    </div>
                    <div>DDD</div>
                    <div>
                        <input type="text" placeholder="DDD"/>
                        <input type="text" placeholder="número"/>
                    </div>
                    <div>CPF</div>
                    <div>
                        <input type="text" placeholder="CPF"/>
                    </div>
                </div>
                <div>
                    <div>Logradouro</div>
                    <div>
                        <input type="text" placeholder="Rua Jobina cruz, Av. Florispe Crispim"/>
                    </div>
                    <div>Número</div>
                    <div>
                        <input type="text" />
                    </div>
                    <div>Bairro</div>
                    <div>
                        <input type="text" />
                    </div>
                    <div>Complemento</div>
                    <div>
                        <input type="text" />
                    </div>
                </div>

                <div>
                    <div>Cartão</div>
                    <div>
                        <input type="text" />
                    </div>
                    <div>Nome impresso no cartão</div>
                    <div>
                        <input type="text" />
                    </div>
                    <div>CVV</div>
                    <div>
                        <input type="text" />
                    </div>
                    <div>Expira em</div>
                    <div>
                        <input type="text" placeholder="mm"/>
                        <input type="text" placeholder="aa"/>
                    </div>
                </div>

            </form>
        </div>
    );

}