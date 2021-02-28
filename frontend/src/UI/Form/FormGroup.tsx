import React from "react";

import "./FormGroup.sass";

export type FormGroupProps = {
    row?: boolean
}

export const FormGroup: React.FC<FormGroupProps> = ({ row = false, children }) => {

    const getClassName = () => {
        let className = "FormGroup";

        if(row) {
            className += " row";
        } else {
            className += " column";
        }

        return className;
    }

    return (
        <div className={getClassName()}>
            {children}
        </div>
    );

}