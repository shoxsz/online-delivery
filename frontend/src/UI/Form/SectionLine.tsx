import React from "react";

import "./SectionLine.sass"

export type SectionLineProps = {
    text: string;
}

export const SectionLine: React.FC<SectionLineProps> = ({ text }) => {

    return (
        <div className="SectionLine">
            <span className="SectionLine-text">
                {text}
            </span>
        </div>
    )

}