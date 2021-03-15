import React from "react";

export type Screen = {
    component: React.FC<any>;
    args: any[];
}

export type AppContextType = {
    pushScreen: (component: React.FC, ...args: any[]) => void;
    popScreen: () => void;
    stack: Screen[];
}

export type AppContextProps = {
    main: Screen;
}

export const appContext = React.createContext<AppContextType | undefined>(undefined);

export const AppContext: React.FC<AppContextProps> = ({ main }) => {
    const [history, setHistory] = React.useState<Screen[]>([main]);
    const [current, setCurrent] = React.useState<Screen>(main);

    const pushScreen = (component: React.FC<any>, ...args: any[]) => {
        const screen: Screen = {
            component,
            args
        };

        setHistory([...history, screen]);
        setCurrent(screen);
    }

    const popScreen = () => {
        if(history.length < 2) return;

        history.pop();

        const current = history[history.length - 1];

        setHistory([...history]);
        setCurrent(current);
    }

    return (
        <appContext.Provider value={
            {
                pushScreen,
                popScreen,
                stack: history
            }
        }>
            <current.component { ...current.args } />
        </appContext.Provider>
    )
    
}