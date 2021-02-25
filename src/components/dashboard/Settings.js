//React
import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

//Import Components
import {useAuth} from '../../contexts/AuthContext';

//Component
export default function Dashboard(){
    
    const {currentUser} = useAuth();

    return(
        <div>
            <Card className="dashSettings">
                <Card.Body className="columnSettings">
                    <h2 className="text-center mb-4">Settings</h2>
                    <Link to="/userUpdate" className="text-center mb-2 h5">Account</Link>
                </Card.Body>
            </Card>
        </div>
    )
}