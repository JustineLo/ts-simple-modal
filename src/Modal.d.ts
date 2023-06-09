import React from 'react';
import './Modal.css';
interface ModalProps {
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
declare function Modal({ show, onClose, children }: ModalProps): import("react/jsx-runtime").JSX.Element | null;
export default Modal;
