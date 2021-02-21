import React from "react";

import "./Modal.sass"

export type ModalProps = {
    show: boolean;
    closeWhenClickOutside?: boolean;
    onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = ({ show, closeWhenClickOutside = true, onClose, children }) => {

    const modalRef = React.createRef<HTMLDivElement>();

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        if(e.target !== modalRef.current) {
            return;
        }

        if(closeWhenClickOutside) {
            close();
        }
    }

    const close = () => {
        onClose?.();
    }

    if(!show) {
        return null;
    }

    return (
        <div ref={ modalRef } className="Modal" onClick={handleClick}>
            <div className="Modal-window">
                { children }
            </div>
        </div>
    )

}