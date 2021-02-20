import React, { MouseEventHandler } from "react";

import "./IconButton.sass"

export type IconButtonProps = {
    icon: string;
    color: string;
    margin?: string
    onClick?: MouseEventHandler
    hover?: boolean
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, color, margin, onClick, hover = true }) => {

    return (
        <div className="IconButton" style={ { backgroundColor: color, margin: margin, cursor: hover? "pointer" : undefined } } onClick={ onClick }>
            { icon }
        </div>
    )

}