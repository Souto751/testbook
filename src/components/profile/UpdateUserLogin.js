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
    const passwordConfirmRef = useRef();
    const {currentUser, updateEmail, updatePassword} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match');
        }

        const promises = [];
        setLoading(true);
        setError('');

        if(emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value));
        }

        if(passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value));
        }

        Promise.all(promises).then(() => {
            history.push('/');
        }).catch(() => {
            setError('Failed to update account');
        }).finally(() => {
            setLoading(false);
        });
    }

        return(
            <div className="centerContentRegister">
                <div className="registerPage mt-5">
                    <Card className="register text-center">
                        <Card.Body>
                            <h2 className="text-center mb-4 mt-3">Update Account Login</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form id="registerForm" onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} defaultValue={currentUser.email} />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} placeholder="Leave blank to keep the same" />
                                </Form.Group>
                                <Form.Group id="confirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" ref={passwordConfirmRef} placeholder="Leave blank to keep the same" />
                                </Form.Group>
                                <Button disabled={loading} className="w-100" type="submit">Update</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
}