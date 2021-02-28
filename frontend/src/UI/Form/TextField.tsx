import React from "react";

import "./TextField.sass"

export type TextFieldProps = {
    defaultText?: string;
    placeholder?: string;
    width?: number;
    onChange?: (value: string) => void;
}

export const TextField: React.FC<TextFieldProps> = ({ defaultText, placeholder, width, onChange }) => {
    
    const [value, setValue] = React.useState(defaultText || "");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        onChange?.(event.target.value);
    }

    return (
        <input
            className="TextField"
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            style={
                {
                    width: `${width}px`
                }
            }/>
    );

}