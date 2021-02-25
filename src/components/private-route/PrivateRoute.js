//React
import React from 'react';
import {Redirect, Route} from 'react-router-dom';

//Import Components
import {useAuth} from '../../contexts/AuthContext';

//Component
export default function PrivateRoute({component: Component, ...rest}) {

    const {currentUser} = useAuth();

    return (
        <Route
            {...rest}
            render = {props => {
                return currentUser ? <Component {...props} /> : <Redirect to="/login" />
            }}
        ></Route>
    )
}
