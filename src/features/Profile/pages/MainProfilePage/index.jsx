import { SEARCH_RESULT, USER_PROFILE } from 'constants/global';
import UserInfo from 'features/Profile/components/UserInfo';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link, useParams } from 'react-router-dom';
import { Button, Container, Row } from 'reactstrap';
import "./MainProfilePage.scss";

MainProfilePage.propTypes = {

};

function MainProfilePage(props) {
    const { userId } = useParams();
    // console.log(userId);
    const data = userId ? SEARCH_RESULT.filter((item) => item.id === parseInt(userId))[0] : USER_PROFILE;

    const [toggle, setToggle] = useState(false);

    return (
        <div className="profile">
            <Container>
                <div className={toggle ? "overlay toggle" : "overlay"}></div>

                <Button
                    color="primary"
                    className="profile__menu"
                    onClick={() => { toggle ? setToggle(false) : setToggle(true) }}
                >
                    O
                </Button>

                <Row className={toggle ? "profile__links toggle" : "profile__links"}>
                    <ul>
                        <li><Link to="/status">View Status Updates</Link></li>
                        <li><Link to="/friend">View Friends</Link></li>
                        <li><Link to="/auth/sign-in">Log Out</Link></li>
                        <hr></hr>
                        <li><Link to="/friend/search">Search For Friends</Link></li>
                        <li><Link to="/friend/request">View Pending Requests</Link></li>
                        <li><Link to="/profile/edit">Edit Profile</Link></li>
                    </ul>
                </Row>
                <UserInfo data={data} />
            </Container>
        </div>
    );
}

export default MainProfilePage;