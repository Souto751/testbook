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
            <Card className="dashProfile">
                <Card.Body>
                    <div className="dashProfileImgDiv"><img src="https://github.com/Souto751/project-imgs/blob/main/testbook/gamepad.png?raw=true" className="dashProfileImg mb-4" /></div>
                    <p className="text-center mb-4 fs-2 userCardEmail">{currentUser.email}</p>
                    <Link to="/user/Puxu"><Button className="w-100 primary">Profile</Button></Link>
                </Card.Body>
            </Card>
        </div>
    )
}