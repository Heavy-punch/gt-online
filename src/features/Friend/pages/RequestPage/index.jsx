import MessageBox from "components/MessageBox";
import { SEARCH_RESULT } from "constants/global";
import RequestForm from "features/Friend/components/RequestForm";
import { friendCreateRequest, getUserList } from "features/Friend/friendSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { tranformUserData } from "utils/common";
import "./RequestPage.scss";

RequestPage.propTypes = {};

function RequestPage(props) {
  const { email } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (values) => {
    // console.log("hello", values);
    const params = {
      path: email,
      body: { relationship: values.relationship },
    };
    //dispatch action
    const dispatchAction = await dispatch(friendCreateRequest(params));
    //return when success
    dispatchAction.meta.requestStatus === "fulfilled" &&
      history.push("/friend/search");
  };

  const { error, userList } = useSelector((state) => state.users);
  // console.log("requestpage userList: ", userList);
  // console.log("requestpage userList transform: ", tranformUserData(userList));

  useEffect(() => {
    dispatch(getUserList({ email: email }));
  }, []);

  const data = SEARCH_RESULT.concat(tranformUserData(userList) || []);
  const requestFriend = data.filter((item) => item.email === email);
  return (
    <div className="request">
      <Container>
        {requestFriend.length !== 1 ? (
          <h1>sorry user is not exist</h1>
        ) : (
          <Row>
            <h1 className="search__title">
              Request New Friend For{" "}
              {" " +
                requestFriend[0].firstName +
                " " +
                requestFriend[0].lastName}
            </h1>
            <div className="search__form">
              <RequestForm
                onSubmit={handleSubmit}
                requestFriend={requestFriend[0]}
              />
            </div>
            {error && <MessageBox variant="danger">{error}</MessageBox>}
          </Row>
        )}
      </Container>
    </div>
  );
}

export default RequestPage;
