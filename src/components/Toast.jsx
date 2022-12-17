
import React from 'react';
import Toast from 'react-bootstrap/Toast';

const CustomToast = ({ show, autohide, variant, onClose, message }) => {

    return (
        <Toast
            show={show}
            autohide={autohide}
            delay={3000}
            bg={variant}
            onClose={onClose}
        >
            <Toast.Body>{message}</Toast.Body>
        </Toast >
    )
}

export default CustomToast;
