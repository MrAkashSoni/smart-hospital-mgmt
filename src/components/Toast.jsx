
import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';

const variant = {
    Primary: 'primary',
    Secondary: 'secondary',
    Success: 'success',
    Danger: 'danger',
    Warning: 'warning',
    Info: 'info',
    Light: 'light',
    Dark: 'dark',
}

const CustomToast = () => {

    const [show, setShow] = useState(true);

    const toggleShow = () => setShow(!show);

    return (
        <Toast
            show={true}
            bg={variant.Success}
            onClose={toggleShow}
        >
            <Toast.Header>
                <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                />
                <strong className="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
    )
}

export default CustomToast;
