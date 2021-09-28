import LoadingBox from "components/LoadingBox";
import MessageBox from "components/MessageBox";
import { GENDER_OPTIONS, SEARCH_RESULT } from "constants/global";
import { logOut } from "features/Auth/authSlice";
import { friendReset, getUserList } from "features/Friend/friendSlice";
import UserInfo from "features/Profile/components/UserInfo";
import { getProfile, profileReset } from "features/Profile/profileSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button, Container, Row } from "reactstrap";
import { tranformProfileData, tranformUserData } from "utils/common";
import "./MainProfilePage.scss";
MainProfilePage.propTypes = {};

function MainProfilePage(props) {
  const dispatch = useDispatch();
  const { email } = useParams();
  //reset for the first time
  useEffect(() => {
    dispatch(profileReset());
    dispatch(friendReset());
  }, []);

  const {
    profile,
    loading: profile_loading,
    error: profile_error,
  } = useSelector((state) => state.profile);
  // console.log(profile);
  const {
    userList,
    loading: user_loading,
    error: user_error,
  } = useSelector((state) => state.users);
  // console.log("user list filter by email: ", userList);

  useEffect(() => {
    dispatch(getProfile());
    if (email) {
      const params = { email: email };
      dispatch(getUserList(params));
    }
  }, [dispatch, email]);

  // prepare data before pass to component to render
  // const prepareData = profile && {
  //   firstName: profile.first_name,
  //   lastName: profile.last_name,
  //   email: profile.email,
  //   sex: profile.sex
  //     ? GENDER_OPTIONS.find((item) => item.value === profile.sex).label
  //     : "",
  //   birthday: profile.birthdate ? profile.birthdate : "",
  //   currentCity: profile.current_city ? profile.current_city : "",
  //   hometown: profile.hometown ? profile.hometown : "",
  //   interests: profile.interests || [],
  //   education: profile.education || [],
  //   professional: profile.professional || [],
  // };
  const prepareProfileData = tranformProfileData(profile);
  const prepareUserData = () => {
    const transformUserList = Array.isArray(userList)
      ? userList.map((item) => tranformProfileData(item))
      : [];
    const unionUserList = SEARCH_RESULT.concat(transformUserList);
    console.log("unionList : ", unionUserList);
    const UserData = unionUserList.filter((item) => item.email === email)[0];
    return UserData || SEARCH_RESULT[0];
  };

  // console.log("user data : ", prepareUserData());
  // If request URL has email then show userinfo for this user, else show profile
  const data = email ? prepareUserData() : prepareProfileData;

  const [toggle, setToggle] = useState(false);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className="profile">
      <Container>
        <div className={toggle ? "overlay toggle" : "overlay"}></div>

        <Button
          color="primary"
          className="profile__menu"
          onClick={() => {
            toggle ? setToggle(false) : setToggle(true);
          }}
        >
          O
        </Button>

        <Row className={toggle ? "profile__links toggle" : "profile__links"}>
          <ul>
            <li>
              <Link to="/status">View Status Updates</Link>
            </li>
            <li>
              <Link to="/friend">View Friends</Link>
            </li>
            <li>
              <Link to="/auth/sign-in" onClick={handleLogOut}>
                Log Out
              </Link>
            </li>
            <hr></hr>
            <li>
              <Link to="/friend/search">Search For Friends</Link>
            </li>
            <li>
              <Link to="/friend/request">View Pending Requests</Link>
            </li>
            <li>
              <Link to="/profile/edit">Edit Profile</Link>
            </li>
          </ul>
        </Row>
        {email ? (
          <UserInfo data={data} />
        ) : profile_loading === "pending" ? (
          <LoadingBox />
        ) : profile_error ? (
          <MessageBox variant="error">{profile_error}</MessageBox>
        ) : (
          profile && <UserInfo data={data} />
        )}
      </Container>
    </div>
  );
}

export default MainProfilePage;
