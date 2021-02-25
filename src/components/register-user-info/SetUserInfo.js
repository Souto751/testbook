//React
import React, {useRef, useState, setLoading} from 'react';
import {useAuth} from '../../contexts/AuthContext';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';

//Component
export default function Signup(){

    const emailRef = useRef();
    const passwordRef = useRef();
    const {signup} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();

        try{
            setError('');
            setLoading(true);
            history.push('/login');
            await signup(emailRef.current.value, passwordRef.current.value);
        } catch {
            setError('Failed to create an account');
        }
        setLoading(false);
    }

        return(
            <div className="centerContentRegister">
                <div className="registerPage">
                    <Card className="register text-center">
                        <Card.Body>
                            <h2 className="text-center mb-4 mt-3">Sign Up</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="firstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" required />
                                </Form.Group>
                                <Form.Group id="lastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" required />
                                </Form.Group>
                                <Form.Group id="username">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" required />
                                </Form.Group>
                                <Form.Group id="birthDate">
                                    <Form.Label>Birth Date</Form.Label>
                                    <Form.Control type="date" required min="1900-01-01" max="2005-01-01" />
                                </Form.Group>
                                <Button disabled={loading} className="w-100" type="submit">Get Started</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
}