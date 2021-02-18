import { CreateUser } from "../core/types/CreateUser";

export const USERS: { [key: string]: CreateUser } = {
    ADMIN: {
        name: "Paulo Márcio",
        email: "paulomarcio18p1@gmail.com",
        address: [
            {
                country: "BR",
                state: "MG",
                neighborhood: "Raquel",
                number: 262,
                street: "Jovina Cruz",
                zipCode: "39560000",
                complement: ""
            }
        ],
        birthdate: new Date(1995, 12, 12),
        password: "123",
        phone: [
            {
                areaCode: 38,
                countryCode: 55,
                number: "998783174"
            }
        ]
    }
};