import * as axios from "axios";

export type PagSeguroSession = {
    sessionID: string;
}

export class PagSeguroAPI {

    static async getSessionID(): Promise<PagSeguroSession> {
        try {
            const result = await axios.default.get(`http://localhost:9000/pagseguro/sessions`);

            return result.data;

        } catch(error) {
            throw new Error("FALHA");
        }
    }

}