export type Customer = {
    name: string;
    email: string;
    phone: {
        areaCode: string;
        phone: string;
    }
    cpf: string;
    address: {
        street: string;
        number: number;
        neighborhood: string;
        complement: string;
        CEP: string;
    }
    card: {
        number: string;
        holderName: string;
        cvv: number;
        expireDate: {
            month: number;
            year: number;
        }
    }
}