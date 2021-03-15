export type CostumerFormData = {
    name: string;
    email: string;
    phone: string;
    cpf: string;
    address: {
        cep: string;
        street: string;
        number: number;
        neighborhood: string;
        complement: string;
    };
    card: {
        number: string;
        name: string;
        cvv: number;
        expireDate: string;
    }
};

export type CostumerFormDataErrors = Partial<Record<keyof CostumerFormData, "string">>;