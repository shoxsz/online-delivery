import { CONTROLLER } from "../decorators/Controller";
import { GET } from "../decorators/Methods";
import * as axios from "axios";
import { InternalServerError } from "./errors/InvalidError";

@CONTROLLER("pagseguro")
export class PagSeguro {

    @GET("/sessions")
    async getSessionID() {
        const session = await this.getSession();
        const sessionID = this.extractSessionFromXML(session);

        return {
            sessionID
        };
    }

    private async getSession() {
        try {
            const params = new URLSearchParams()
            params.append('email', process.env.PAGSEGURO_EMAIL);
            params.append('token', process.env.PAGSEGURO_TOKEN);

            const result = await axios.default.post(
                process.env.PAGSEGURO_SESSION_ENDPOINT,
                params,
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
            );

            return result.data;
        } catch(error) {
            //log this
            throw new InternalServerError();
        }
    }

    private extractSessionFromXML(xml: string) {
        const startID = xml.indexOf("<id>") + 4;
        if(startID == -1) {
            //log this
            throw new InternalServerError();
        }

        const endID = xml.indexOf("</id>", startID);
        if(endID == -2) {
            //log this
            throw new InternalServerError();
        }

        return xml.substring(startID, endID);
    }

}