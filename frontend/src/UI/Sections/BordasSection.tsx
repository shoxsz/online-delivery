import React from "react";
import { Product } from "../../client/types/Product";
import { MenuBorda } from "../Pizza/MenuBorda";

import "./BordasSection.sass"

export type BordasSectionProps = {
    bordas: Product[];
    onSelect: (border?: Product) => void;
}

export const BordasSection: React.FC<BordasSectionProps> = ({ bordas, onSelect }) => {

    const [selected, setSelected] = React.useState<number>();

    React.useEffect(() => {
        if(typeof selected == "number") {
            onSelect(bordas[selected]);
        } else {
            onSelect(undefined);
        }
    }, [selected]);

    const renderBordas = () => {
        return bordas.map((borda, idx) => {
            return (
                <div onClick={ e => handleClick(idx) } key={ borda.id }>
                    <MenuBorda product={ borda } selected={ idx === selected } />
                </div>
            );
        });
    }

    const handleClick = (idx: number) => {
        if(idx === selected) {
            setSelected(undefined);
        } else {
            setSelected(idx);
        }
    }

    return (
        <div className="BordasSection">
            {renderBordas()}
        </div>
    )

}