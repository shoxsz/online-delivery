
export class EmailAlreadyInUse extends Error{

    constructor(message?: string) {
        super(message || "O email informado já está em uso");
    }

}