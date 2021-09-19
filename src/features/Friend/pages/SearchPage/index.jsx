import LoadingBox from "components/LoadingBox";
import MessageBox from "components/MessageBox";
import { SEARCH_RESULT } from "constants/global";
import SearchForm from "features/Friend/components/SearchForm";
import SearchResult from "features/Friend/components/SearchResult";
import { getUserList } from "features/Friend/friendSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Row } from "reactstrap";
import "./SearchPage.scss";

SearchPage.propTypes = {};

function SearchPage(props) {
  const searchResult = SEARCH_RESULT;
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    const preparedData = {
      name: values.name,
      email: values.email,
      hometown: values.hometown,
    };
    dispatch(getUserList(preparedData));
  };
  const handleResultClick = (friend) => {
    const requestFriendUrl = `request/${friend.id}`;
    history.push(requestFriendUrl);
  };

  const { loading, userList, error } = useSelector((state) => state.users);
  //   console.log("list users: ", userList);

  const prepareData = (oldData) => {
    let newData;
    if (!Array.isArray(oldData)) return;
    else {
      newData = [...Array(oldData.length)];
      oldData.map(
        (item, index) =>
          (newData[index] = {
            firstName: item.first_name,
            lastName: item.last_name,
            hometown: item.hometown,
            email: item.email,
          })
      );
    }
    return newData;
  };

  return (
    <div className="search">
      <Container>
        <Row>
          <h1 className="search__title">Search For Friends</h1>
          <div className="search__form">
            <SearchForm onSubmit={handleSubmit} loading={loading} />
          </div>
          <hr></hr>
          <h1>static data</h1>
          <div className="search__result">
            <SearchResult
              searchResult={searchResult}
              onResultNameClick={handleResultClick}
            />
          </div>
          <hr className="mt-5"></hr>
          <h1>dynamic data</h1>
          {loading === "pending" ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox variant="warning">{error}</MessageBox>
          ) : (
            userList && (
              <div className="search__result">
                <SearchResult
                  searchResult={prepareData(userList.Users)}
                  onResultNameClick={handleResultClick}
                />
              </div>
            )
          )}
        </Row>
      </Container>
    </div>
  );
}

export default SearchPage;
