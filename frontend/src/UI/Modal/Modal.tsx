import React from "react";

import "./Modal.sass"

export type ModalProps = {

    show: boolean

}

export const Modal: React.FC<ModalProps> = ({ show, children }) => {

    const [modalShow, setModalShow] = React.useState(false);

    React.useEffect(() => {
        setModalShow(show);
    }, [show]);

    if(!show) {
        return null;
    }

    return (
        <div className="Modal">
            { children }
        </div>
    )

}