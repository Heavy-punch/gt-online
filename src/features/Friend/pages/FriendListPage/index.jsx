import { SEARCH_RESULT, USER_PROFILE } from 'constants/global';
import useSortableData from 'custom-hooks/useSortableData';
import FriendList from 'features/Friend/components/FriendList';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';
import "./FriendListPage.scss";

FriendListPage.propTypes = {

};

function FriendListPage(props) {
    const history = useHistory();
    const userInfo = USER_PROFILE;
    const data = SEARCH_RESULT;
    const handleNameClick = (item) => {
        const friendProfileUrl = `../profile/${item.id}`
        history.push(friendProfileUrl);
    };
    const { items, requestSort, sortConfig } = useSortableData(data);
    return (
        <div className="friend-list">
            <Container>
                <Link to="./profile" className="friend-list__link">Back to Profile</Link>
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