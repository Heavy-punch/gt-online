import { SEARCH_RESULT, USER_PROFILE } from "constants/global";
import useSortableData from "custom-hooks/useSortableData";
import FriendList from "features/Friend/components/FriendList";
import { friendList } from "features/Friend/friendSlice";
import { getProfile } from "features/Profile/profileSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Container } from "reactstrap";
import {
  tranformFriendListData,
  tranformProfileData,
  tranformUserData,
} from "utils/common";
import "./FriendListPage.scss";

FriendListPage.propTypes = {};

function FriendListPage(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  //get profile
  const {
    loading: profile_loading,
    error: profile_error,
    profile,
  } = useSelector((state) => state.profile);
  //   console.log("profile : ", profile);

  //get friend list
  const {
    loading: friendList_loading,
    error: friendList_error,
    userList,
  } = useSelector((state) => state.users);
  //   console.log("userList : ", userList);

  //fetching for the first time
  useEffect(() => {
    dispatch(getProfile());
    dispatch(friendList());
  }, []);

  const userInfo = tranformProfileData(profile) || USER_PROFILE;
  const data = SEARCH_RESULT.concat(tranformFriendListData(userList) || []);

  const handleNameClick = (item) => {
    const friendProfileUrl = `../profile/${item.email}`;
    history.push(friendProfileUrl);
  };
  const { items, requestSort, sortConfig } = useSortableData(data);
  return (
    <div className="friend-list">
      <Container>
        <Link to="./profile" className="friend-list__link">
          Back to Profile
        </Link>
        <h5 className="friend-list__title">
          {"Friends of " + userInfo.firstName + " " + userInfo.lastName}
        </h5>
        <div className="friend-list__list">
          <FriendList
            friendList={items}
            onNameClick={handleNameClick}
            requestSort={requestSort}
            sortConfig={sortConfig}
          />
        </div>
      </Container>
    </div>
  );
}

export default FriendListPage;
