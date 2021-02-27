import React from "react";
import { Icon } from "../Icons/Icon";
import { Modal } from "../Modal/Modal";

import "./PurchaseModal.sass";

export type PurchaseModalProps = {
    show: boolean;
    onClose?: () => void;
}

export const PurchaseModal: React.FC<PurchaseModalProps> = ({ show, onClose }) => {

    const selectCreditCard = () => {

    }

    const selectPicPay = () => {

    }

    return (
        <div className="PurchaseModal">
            <Modal show={show} onClose={onClose}>
                <div className="PurchaseModal-title">Como você quer pagar?</div>
                <div className="PurchaseModal-credit-card" onClick={ selectCreditCard }>
                    <Icon icon="creditCard" size={32}/>
                    <span>Cartão de crédito</span>
                </div>
                <div className="PurchaseModal-picpay" onClick={ selectPicPay }>
                    <Icon icon="picpay" size={64} />
                </div>
            </Modal>
        </div>
    );

}