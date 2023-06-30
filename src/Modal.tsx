import React from 'react';
import './Modal.css';

interface ModalProps {
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

/*
* @component
*
* @param {Object} props - The component props.
* @param {boolean} props.show - Determines whether the modal should be displayed.
* @param {Function} props.onClose - The function to be called when the modal is closed.
* @param {React.ReactNode} props.children - The content to be rendered inside the modal.
*
* @returns {JSX.Element|null} The Modal component.
*/

function Modal ({ show, onClose, children }: ModalProps){
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        {children}
        <div className="modal-footer">
          <button onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
