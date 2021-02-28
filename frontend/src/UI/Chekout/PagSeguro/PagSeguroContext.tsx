import React from "react";

export type PagSeguroData = {
    initSession: () => Promise<string>;
    getSessionID: () => string | undefined;
}

export const pagContext = React.createContext<PagSeguroData | undefined>(undefined);

export const PagSeguroContext = ({ children }) => {

    const [sessionID, setSessionID] = React.useState<string>();

    const initSession = async () => {
        return "";
    }

    const getSessionID = () => {
        return "";
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