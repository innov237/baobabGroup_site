import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { DividerVertical } from '../dividerVertical/DividerVertical';
import './ContactForm.css';

const ContactForm: React.FC = () => (
    <div className="container-fluid">
        <div className="row  d-fex align-items-end justify-content-end">
            <div className="col-md-3">
                <DividerVertical></DividerVertical>
                <DividerVertical></DividerVertical>
                <DividerVertical></DividerVertical>
            </div>
            <div className="col-md-9 form-container">
                <h1 className="pb-5" style={{ color: "white" }}>Let's get started</h1>

                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Email Adress</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <br />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
        <DividerVertical></DividerVertical>
    </div>

);

export default ContactForm;