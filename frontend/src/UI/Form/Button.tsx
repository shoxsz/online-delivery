import React from "react";

import "./Button.sass"

export type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {

    return (
        <button className="FormButton" onClick={onClick}>
            {children}
        </button>
    )

}