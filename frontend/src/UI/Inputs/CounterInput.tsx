import React from "react";

import "./CounterInput.sass"

export type CounterInputProps = {
    min?: number;
    max?: number;
    step?: number;
    onChange?: (value: number) => void
}

export const CounterInput: React.FC<CounterInputProps> = ({ min = 0, max = 100, step=1, onChange }) => {

    const [value, setValue] = React.useState(min);

    const change = (v: number) => {
        let newValue = value + v;

        if(newValue < min) {
            newValue = min;
        }

        if(newValue > max) {
            newValue = max;
        }

        setValue(newValue);
        onChange?.(newValue);
    }

    return (
        <div className="CounterInput">
            <div className="CounterInput-lbutton" onClick={ () => change(-step) }>-</div>
            <input type="text" value={ value } onChange={ () => {} } />
            <div className="CounterInput-rbutton" onClick={ () => change(step) }>+</div>
        </div>
    );

}