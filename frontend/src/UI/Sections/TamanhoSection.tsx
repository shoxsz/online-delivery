import React from "react";
import { Product } from "../../client/types/Product";
import { MenuTamanho } from "../Pizza/MenuTamanho";

import "./TamanhoSection.sass"

export type TamanhoSectionProps = {
    tamanhos: Product[];
}

export const TamanhoSection: React.FC<TamanhoSectionProps> = ({ tamanhos }) => {

    const [selected, setSelected] = React.useState<number>(0);

    const renderTamanhos = () => {
        return tamanhos.map((tamanho, idx) => renderTamanho(idx))
    }

    const renderTamanho = (idx: number) => {
        const tamanho = tamanhos[idx];
        return (
            <div className="TamanhoSection-item" onClick={ e => handleClick(idx) } key={ tamanho.name }>
                <MenuTamanho product={ tamanho } selected={ selected == idx } />
            </div>
        )
    }

    const handleClick = (idx: number) => {
        setSelected(idx);
    }

    return (
        <div className="TamanhoSection">
            { renderTamanhos() }
        </div>
    );

}