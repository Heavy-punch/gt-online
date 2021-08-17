import { SEARCH_RESULT, USER_PROFILE } from 'constants/global';
import UserInfo from 'features/Profile/components/UserInfo';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Button, Container, Row } from 'reactstrap';
import "./MainProfilePage.scss";
import { logOut } from 'features/Auth/authSlice';
MainProfilePage.propTypes = {

};

function MainProfilePage(props) {
    const dispatch = useDispatch();
    const { userId } = useParams();
    // console.log(userId);
    const data = userId ? SEARCH_RESULT.filter((item) => item.id === parseInt(userId))[0] : USER_PROFILE;

    const [toggle, setToggle] = useState(false);

    const handleLogOut = () => {
        dispatch(logOut())
    };

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const requestURL = process.env.REACT_APP_API_URL;
    //             const response = await fetch("http://localhost:8080/ping");
    //             const responseJSON = await response.json();
    //             const { data } = responseJSON;
    //             console.log("responsed data: ", responseJSON);
    //         } catch (error) {
    //             console.log("failed to fetch data from server: ", error.message);
    //         }
    //     }
    //     fetchData();
    // }
    //     , []);

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
                <UserInfo data={data} />
            </Container>
        </div>
    );
}

export default MainProfilePage;