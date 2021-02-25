//React
import React, {Component} from 'react';

//Image
import headerNameLogo from './headerNameLogo.png';

//Component
export default class UnloggedHeader extends Component{
    render(){
        return(
            <div className="loginHeader">
                <img src={headerNameLogo} alt="testbook" className="headerLogo" />
            </div>
        );
    }
}