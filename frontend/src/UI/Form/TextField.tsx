import React from "react";

import "./TextField.sass"
import { TextFieldMasker } from "./TextFieldMasker";

export type TextFieldProps = {
    defaultText?: string;
    placeholder?: string;
    width?: number;
    onChange?: (value: string) => void;
    masker?: TextFieldMasker;
}

const defaultMasker: TextFieldMasker = {
    applyMask: value => value
};

export const TextField: React.FC<TextFieldProps> = ({ defaultText, placeholder, width, onChange, masker = defaultMasker }) => {
    
    const [value, setValue] = React.useState(defaultText || "");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = masker.applyMask(event.target.value);

        setValue(value);
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