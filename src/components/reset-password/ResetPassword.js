//React
import React, {useRef, useState, setLoading} from 'react';
import {useAuth} from '../../contexts/AuthContext';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';

//Component
export default function ResetPassword(){

        const emailRef = useRef();
        const {resetPassword} = useAuth();
        const [error, setError] = useState('');
        const [loading, setLoading] = useState(false);
        const [message, setMessage] = useState("")

        async function handleSubmit(e){
            e.preventDefault();
    
            try{
                setMessage("");
                setError('');
                setLoading(true);
                await resetPassword(emailRef.current.value);
                setMessage('Check your email');
            } catch {
                setError('Incorrect email');
            }
            setLoading(false);
        }

        return(
            <div className="centerContentLogin">
                <div className="loginPage">
                    <Card className="login text-center">
                        <Card.Body>
                            <h2 className="text-center mb-4 mt-3">Reset Password</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            {message && <Alert variant="success">{message}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Button disabled={loading} className="w-100" type="submit">Send Email</Button>
                            </Form>
                            <div className="w-100 text-center mt-4"><Link to="/login">Login</Link></div>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-4">Need an account? <Link to="/signup">Sign Up</Link></div>
                </div>
            </div>
        );
}