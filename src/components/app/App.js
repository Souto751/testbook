//React
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Import Components
import Header from '../header/UnloggedHeader';
import HeaderProfile from '../header/ProfileHeader';
import {AuthProvider} from '../../contexts/AuthContext';
import Dashboard from '../dashboard/Dashboard';
import Register from '../register/Register';
import Login from '../login/Login';
import PrivateRoute from '../private-route/PrivateRoute';
import ResetPassword from '../reset-password/ResetPassword';
import SetUserInfo from '../register-user-info/SetUserInfo';
import UpdateUserLogin from '../profile/UpdateUserLogin';
import Profile from '../profile/UserProfile';

//Component
function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route exact path="/signup">
            <div className="logScreen">
              <Header />
              <Register />
            </div>
          </Route>
          <Route exact path="/login">
            <div className="logScreen">
              <Header />
              <Login />
            </div>
          </Route>
          <Route exact path='/reset-password'>
            <div className="logScreen">
              <Header />
              <ResetPassword />
            </div>
          </Route>
          <Route exact path="/signup/user_info">
            <Header />
            <SetUserInfo />
          </Route>
          <Route path='/user/'>
            <div className="logScreen">
              <HeaderProfile />
              <Profile />
            </div>
          </Route>
          <Route exact path="/userUpdate">
            <HeaderProfile />
            <UpdateUserLogin />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
