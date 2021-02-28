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
            params.append('email', 'paulomarcio18p1@gmail.com');
            params.append('token', "5E2E7BF411C846568C10E353338D1566");

            const result = await axios.default.post(
                "https://ws.sandbox.pagseguro.uol.com.br/v2/sessions",
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
            throw new InternalServerError();
        }

        const endID = xml.indexOf("</id>", startID);
        if(endID == -2) {
            throw new InternalServerError();
        }

        return xml.substring(startID, endID);
    }

}