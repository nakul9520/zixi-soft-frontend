import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function FloatingLabelInput() {
    const [focused, setFocused] = useState(false);

    return (
        <Form.Group className="floating-label-input">
            <Form.Label className={focused ? 'focused' : ''}>Email</Form.Label>
            <Form.Control 
                type="email"
                onFocus={() => setFocused(true)}
                onBlur={(e) => setFocused(e.target.value !== '')}
            />
        </Form.Group>
    );
}

export default FloatingLabelInput;
