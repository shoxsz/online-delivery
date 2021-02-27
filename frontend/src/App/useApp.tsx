import React from "react";
import { appContext } from "./AppContext";

export const useApp = () => {

    const context = React.useContext(appContext);

    return {
        pushScreen: context?.pushScreen,
        popScreen: context?.popScreen
    };

}