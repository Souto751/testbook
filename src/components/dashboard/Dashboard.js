//React
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

//Import Components
import UserCard from './UserCard';
import Settings from './Settings';
import Posts from './Posts';
import Header from '../header/LoggedHeader';
import {useAuth} from '../../contexts/AuthContext';

//Component
export default function Dashboard(){

    const [error, setError] = useState('');
    const {logout} = useAuth();
    const {history} = useHistory();
    
    async function handleLogout(){
        setError("");

        try{
            await logout();
            history.pushState('/login');
        }catch{
            setError('Failed to logout');
        }
    }

        return (
            <div className="dashboardScreen">
                <Header handleLogout={handleLogout} />
                <div className="dashboardComponents">
                    <UserCard />
                    <Posts />
                    <Settings />
                </div>
            </div>
        )
    
}
