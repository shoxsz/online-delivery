import React from "react";
import { PagSeguroAPI } from "../../../client/API/PagSeguro";

export type PagSeguroData = {
    initSession: () => Promise<string>;
    getSessionID: () => string | undefined;
}

export const pagContext = React.createContext<PagSeguroData | undefined>(undefined);

export const PagSeguroContext = ({ children }) => {

    const [sessionID, setSessionID] = React.useState<string>();

    const initSession = async () => {
        const result = await PagSeguroAPI.getSessionID();
        setSessionID(result.sessionID);
        return result.sessionID;
    }

    const getSessionID = () => {
        return sessionID;
    }

    return (
        <pagContext.Provider value={
            {
                initSession,
                getSessionID
            }
        }>
            {children}
        </pagContext.Provider>
    );

}