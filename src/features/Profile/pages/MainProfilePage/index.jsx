import LoadingBox from 'components/LoadingBox';
import MessageBox from 'components/MessageBox';
import { GENDER_OPTIONS, SEARCH_RESULT } from 'constants/global';
import { logOut } from 'features/Auth/authSlice';
import UserInfo from 'features/Profile/components/UserInfo';
import { getProfile } from 'features/Profile/profileSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Button, Container, Row } from 'reactstrap';
import "./MainProfilePage.scss";
MainProfilePage.propTypes = {

};

function MainProfilePage(props) {
    const dispatch = useDispatch();
    const { userId } = useParams();

    const { profile, loading, error } = useSelector((state) => state.profile);
    // console.log(profile);

    useEffect(() => {
        dispatch(getProfile())
    }
        , [dispatch]);

    // prepare data before pass to component to render
    const prepareData = profile && {
        firstName: profile.first_name,
        lastName: profile.last_name,
        email: profile.email,
        sex: GENDER_OPTIONS.find(item => item.value === profile.sex).label,
        birthday: profile.birthdate,
        currentCity: profile.current_city,
        hometown: profile.hometown,
        interests: profile.interests || [],
        education: profile.education || [],
        professional: profile.professional || [],
    }
    // If request URL has userId then show userinfo for this user, else show profile
    const data = userId ? SEARCH_RESULT.filter((item) => item.id === parseInt(userId))[0] : prepareData;

    const [toggle, setToggle] = useState(false);

    const handleLogOut = () => {
        dispatch(logOut())
    };

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
                        <li><Link to="/auth/sign-in" onClick={handleLogOut}>Log Out</Link></li>
                        <hr></hr>
                        <li><Link to="/friend/search">Search For Friends</Link></li>
                        <li><Link to="/friend/request">View Pending Requests</Link></li>
                        <li><Link to="/profile/edit">Edit Profile</Link></li>
                    </ul>
                </Row>
                {loading === "pending" ? <LoadingBox />
                    : error ? <MessageBox variant="error">{error}</MessageBox>
                        : profile && <UserInfo data={data} />
                }
            </Container>
        </div>
    );
}

export default MainProfilePage;