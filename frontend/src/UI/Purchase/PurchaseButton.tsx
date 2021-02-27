import React from "react";
import { IconButton } from "../Buttons/IconButton";
import { useCart } from "../Cart/Hooks/useCart";
import { PurchaseModal } from "./PurchaseModal";

export type PurchaseButtonProps = {

}

export const PurchaseButton: React.FC<PurchaseButtonProps> = ({  }) => {

    const cart = useCart();

    const [showModal, setShowModal] = React.useState(false);

    const closeModal = () => setShowModal(false);

    const handleClick = () => {
        if(cart.orders.length) {
            setShowModal(true);
        }
    }

    return (
        <>
        <IconButton margin="2px" icon="fastCart" size={32} bgColor={ cart.orders.length ? "#e4cd05" : "#fefefe" } onClick={ handleClick } />
        <PurchaseModal show={showModal} onClose={ closeModal } />
        </>
    );

}