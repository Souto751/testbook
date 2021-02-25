//React
import React from 'react';
import {Card, Alert} from 'react-bootstrap';

//Import Components
import Posts from '../dashboard/Posts';
import {useAuth} from '../../contexts/AuthContext';

//Import Fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';

//Set Fontawesome
const moreOptionsProfile = <FontAwesomeIcon className="moreOptionsProfileBannerBtn" icon={faEllipsisH} />

//Component
export default function UserProfile(){
        const {currentUser} = useAuth();

        return (
            <div className="profileScreen">
                <div className="userInfoHeader">
                    <div className="profileBanner"><img src="https://tinkercademy.com/wp-content/uploads/2017/04/Generic-Banner-07-Web-App-Developer.png" alt="banner" className="profileBannerImg" /></div>
                    <div className="profileContactInfo">
                        <img src="https://github.com/Souto751/project-imgs/blob/main/testbook/gamepad.png?raw=true" alt="profile image" className="profileImg" />
                        <div className="profileNameBanner">
                            <div className="ml-3 mt-1">
                                <h2 className="profileName">Your Name</h2>
                                <h5 className="profileUserName">{currentUser.email}</h5>
                            </div>
                            <div className="moreOptionsProfileBanner">
                                {moreOptionsProfile}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profileContent">
                    <Card className="profileFriends">
                        <Card.Body className="profileFriendsBody">
                            <h3 className="text-center">Friends</h3>
                            <Alert variant="danger">You don't have friends yet.</Alert>
                        </Card.Body>
                    </Card>
                    <div className="profilePosts">    
                        <Posts />
                    </div>
                </div>
            </div>
        )
}
