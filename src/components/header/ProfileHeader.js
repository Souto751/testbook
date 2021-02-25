//React
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//Image
import headerNameLogo from './headerNameLogo.png';

//Import Fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';

//Set Fontawesome
const Home = <FontAwesomeIcon className="moreOptionsProfileBannerBtn" icon={faHome} />

//Component
export default class ProfileHeader extends Component{

    render(){
        return(
            <div className="profileHeader">
                <img src={headerNameLogo} alt="testbook" className="headerLogo" />
                <div>
                    <Link to="/">
                        <button className="logoutBtn">
                            <p className="mobileHeaderBtn">{Home}</p>
                            <p className="mobileHeaderText">Home</p>
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}