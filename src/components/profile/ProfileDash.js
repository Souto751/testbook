//React
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

//Import Components
import Profile from './UserProfile';
import Header from '../header/ProfileHeader';
import {useAuth} from '../../contexts/AuthContext';

//Component
export default function Dashboard(){

    const [error, setError] = useState('');
    const {logout} = useAuth();
    const {history} = useHistory();
    
    function profileHandleLogout(){
        setError("");

        try{
            logout();
            history.pushState('/login');
        }catch{
            setError('Failed to logout');
        }
    }

        return (
            <div className="dashboardScreen">
                <Header handleLogout={profileHandleLogout} />
                <Profile />
            </div>
        )
    
}
