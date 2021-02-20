import React from "react";
import { Product } from "../../client/types/Product";
import { MenuBorda } from "../Pizza/MenuBorda";

import "./BordasSection.sass"

export type BordasSectionProps = {
    bordas: Product[];
}

export const BordasSection: React.FC<BordasSectionProps> = ({ bordas }) => {

    const [selected, setSelected] = React.useState<number | null>(null);

    const renderBordas = () => {
        return bordas.map((borda, idx) => {
            return (
                <div onClick={ e => handleClick(idx) } key={ borda.name }>
                    <MenuBorda product={ borda } selected={ idx === selected } />
                </div>
            );
        });
    }

    const handleClick = (idx: number) => {
        if(idx === selected) {
            setSelected(null);
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