//React
import React, {Component} from 'react';

//Image
import headerNameLogo from './headerNameLogo.png';

//Component
export default class LoggedHeader extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="loggedHeader">
                <img src={headerNameLogo} alt="testbook" className="headerLogo" />
                <button className="logoutBtn" onClick={this.props.handleLogout}><p>Log Out</p></button>
            </div>
        );
    }
}