import { USER_PROFILE } from 'constants/global';
import UserInfo from 'features/Profile/components/UserInfo';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Table, Button } from 'reactstrap';
import "./MainProfilePage.scss";
import { useMediaQuery } from 'react-responsive'

MainProfilePage.propTypes = {

};

function MainProfilePage(props) {
    const data = USER_PROFILE;
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 639px)'
    })

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
                        <li><Link to="/auth/sign-in">View Status Updates</Link></li>
                        <li><Link to="/auth/sign-in">View Friends</Link></li>
                        <li><Link to="/auth/sign-in">Log Out</Link></li>
                        <hr></hr>
                        <li><Link to="/friend/search">Search For Friends</Link></li>
                        <li><Link to="/friend/pending">View Pending Requests</Link></li>
                        <li><Link to="/profile/edit">Edit Profile</Link></li>
                    </ul>
                </Row>
                <UserInfo data={data} />
            </Container>
        </div>
    );
}

export default MainProfilePage;