import React, { MouseEventHandler } from "react";

import "./IconButton.sass"

export type IconButtonProps = {
    icon: string;
    color: string;
    margin?: string
    onClick?: MouseEventHandler
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, color, margin, onClick }) => {

    return (
        <div className="IconButton" style={ { backgroundColor: color, margin: margin } } onClick={ onClick }>
            { icon }
        </div>
    )

}