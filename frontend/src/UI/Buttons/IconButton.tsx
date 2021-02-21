import React, { CSSProperties, MouseEventHandler } from "react";
import { Icon, ICONS_TYPE } from "../Icons/Icon";

import "./IconButton.sass"

export type IconButtonProps = {
    icon: keyof ICONS_TYPE;
    size?: number;
    bgColor?: string;
    color?: string;
    margin?: string
    onClick?: MouseEventHandler
    hover?: boolean
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, size = 32, bgColor, color, margin, onClick, hover = true }) => {

    const createStyle = React.useCallback(() => {

        const style: CSSProperties = {
            background: bgColor,
            width: size,
            height: size,
            margin,
            cursor: hover? "pointer" : undefined
        };

        return style;

    }, [icon, size, color, margin, hover]);

    return (
        <div className="IconButton" style={ createStyle() } onClick={ onClick }>
            <Icon icon={ icon } color={ color } size={ size } />
        </div>
    )

}