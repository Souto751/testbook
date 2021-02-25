//React
import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

//Import Components
import {useAuth} from '../../contexts/AuthContext';

//Import Fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faComments, faShareSquare} from '@fortawesome/free-solid-svg-icons';

//Set Fontawesome
const like = <FontAwesomeIcon icon={faThumbsUp} />
const comment = <FontAwesomeIcon icon={faComments} />
const share = <FontAwesomeIcon icon={faShareSquare} />

//Component
export default function Dashboard(){
    
    const {currentUser} = useAuth();

    return(
        <div className="postsContainer">
            <Card className="dashPost">
                <Card.Body>
                    <div className="postHeader">
                        <div>
                            <img className="postUserImg" src="https://github.com/Souto751/project-imgs/blob/main/testbook/gamepad.png?raw=true" alt="userImg" />
                            <Link to="/user/Pupi" className="postUserName">{currentUser.email}</Link>
                        </div>
                        <p>•••</p>
                    </div>
                    <p className="postDescription">Hey!<br /> This is the Pupi's Bakery webpage, you will find a big variety of delicious stuff!! <br /><a href="https://souto751.github.io/webPupiBakery_test2/" target="_blank" alt="random quote generator">Click Here!</a></p>
                    <img src="https://github.com/Souto751/portfolio/blob/main/src/bakeryWeb.png?raw=true" alt="publish" className="postImg" />
                    <div className="postStats">
                        <p className="postSingleStat likeStat">{like} 7k</p>
                        <p className="postSingleStat commentStat">{comment} 777</p>
                        <p className="postSingleStat shareStat">{share} 7</p>
                    </div>
                    <div className="postBtns">
                        <Button className="postSingleBtn">{like}<p className="postBtnText"> Like</p></Button>
                        <Button className="postSingleBtn">{comment}<p className="postBtnText"> Comment</p></Button>
                        <Button className="postSingleBtn">{share}<p className="postBtnText"> Share</p></Button>
                    </div>
                </Card.Body>
            </Card>
            <Card className="dashPost">
                <Card.Body>
                    <div className="postHeader">
                        <div>
                            <img className="postUserImg" src="https://github.com/Souto751/project-imgs/blob/main/testbook/gamepad.png?raw=true" alt="userImg" />
                            <Link to="/user/Puxu" className="postUserName">{currentUser.email}</Link>
                        </div>
                        <p>•••</p>
                    </div>
                    <p className="postDescription">Hey!<br /> This is a watchlist of the series, movies and animes that Pupi and Puxu have watched together! <br /> <a href="https://souto751.github.io/watchlist/" target="_blank" alt="watchlist">Click Here!</a></p>
                    <img src="https://github.com/Souto751/portfolio/blob/main/src/watchlistWeb.png?raw=true" alt="publish" className="postImg" />
                    <div className="postStats">
                        <p className="postSingleStat likeStat">{like} 75</p>
                        <p className="postSingleStat commentStat">{comment} 7</p>
                        <p className="postSingleStat shareStat">{share} 5</p>
                    </div>
                    <div className="postBtns">
                        <Button className="postSingleBtn">{like}<p className="postBtnText"> Like</p></Button>
                        <Button className="postSingleBtn">{comment}<p className="postBtnText"> Comment</p></Button>
                        <Button className="postSingleBtn">{share}<p className="postBtnText"> Share</p></Button>
                    </div>
                </Card.Body>
            </Card>
            <Card className="dashPost">
                <Card.Body>
                    <div className="postHeader">
                        <div>
                            <img className="postUserImg" src="https://github.com/Souto751/project-imgs/blob/main/testbook/gamepad.png?raw=true" alt="userImg" />
                            <Link to="/user/Puxu" className="postUserName">{currentUser.email}</Link>
                        </div>
                        <p>•••</p>
                    </div>
                    <p className="postDescription">Hey!<br /> This is a random quote generator, made with HTML, CSS and JavaScript n.n <br /> <a href="https://codepen.io/Souto751/full/gOLppbq" target="_blank" alt="random quote generator">Click Here!</a></p>
                    <img src="https://github.com/Souto751/portfolio/blob/main/src/randomQuoteWeb.png?raw=true" alt="publish" className="postImg" />
                    <div className="postStats">
                        <p className="postSingleStat likeStat">{like} 14</p>
                        <p className="postSingleStat commentStat">{comment} 3</p>
                        <p className="postSingleStat shareStat">{share} 0</p>
                    </div>
                    <div className="postBtns">
                        <Button className="postSingleBtn">{like}<p className="postBtnText"> Like</p></Button>
                        <Button className="postSingleBtn">{comment}<p className="postBtnText"> Comment</p></Button>
                        <Button className="postSingleBtn">{share}<p className="postBtnText"> Share</p></Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}