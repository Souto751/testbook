//React
import React, {useRef, useState, setLoading} from 'react';
import {useAuth} from '../../contexts/AuthContext';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';

//Component
export default function Login(){

        const emailRef = useRef();
        const passwordRef = useRef();
        const {login} = useAuth();
        const [error, setError] = useState('');
        const [loading, setLoading] = useState(false);
        const history = useHistory();

        async function handleSubmit(e){
            e.preventDefault();
    
            try{
                setError('');
                setLoading(true);
                await login(emailRef.current.value, passwordRef.current.value);
                history.push('/');
            } catch {
                setError('Failed to login');
            }
            setLoading(false);
        }

        return(
            <div className="centerContentLogin">
                <div className="loginPage">
                    <Card className="login text-center">
                        <Card.Body>
                            <h2 className="text-center mb-4 mt-3">Log In</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control ref={passwordRef} type="password" required />
                                </Form.Group>
                                <Button disabled={loading} className="w-100" type="submit">Log In</Button>
                            </Form>
                            <div className="w-100 text-center mt-4"><Link to="/reset-password">Forgot Password?</Link></div>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-4">Need an account? <Link to="/signup">Sign Up</Link></div>
                </div>
            </div>
        );
}