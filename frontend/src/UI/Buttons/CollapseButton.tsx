import React from "react";
import { Icon } from "../Icons/Icon";

import "./CollapseButton.sass"

export type CollapseButtonProps = {
    onCollapse?: () => void;
    onExpand?: () => void;
    startCollapsed?: boolean;
}

export const CollapseButton: React.FC<CollapseButtonProps> = ({ onCollapse, onExpand, startCollapsed = true }) => {
    const [collapsed, setCollapsed] = React.useState(startCollapsed);

    const handleClick = (e: any) => {
        e.stopPropagation()

        if(collapsed) {
            setCollapsed(false);
            onExpand?.();
        } else {
            setCollapsed(true);
            onCollapse?.();
        }
    }

    return (
        <div className="CollapseButton" onClick={ handleClick } style={ { transform: `rotateZ(${collapsed ? 90 : 180}deg)` } }>
            <span>
                <Icon icon="arrow" size={16} />
            </span>
        </div>
    )

}