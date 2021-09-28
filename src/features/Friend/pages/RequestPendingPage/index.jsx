import LoadingBox from "components/LoadingBox";
import MessageBox from "components/MessageBox";
import { SEARCH_RESULT } from "constants/global";
import PeopleHaveRequested from "features/Friend/components/PeopleHaveRequested";
import YouHaveRequested from "features/Friend/components/YouHaveRequested";
import {
  friendAcceptRequest,
  friendListRequest,
} from "features/Friend/friendSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Container, Row } from "reactstrap";
import "./RequestPendingPage.scss";

RequestPendingPage.propTypes = {};

function RequestPendingPage(props) {
  const data = SEARCH_RESULT;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleAccept = async (item) => {
    console.log("accepted : ", item);
    const dispatchAction = await dispatch(friendAcceptRequest(item.email));
    //update when success
    dispatchAction.meta.requestStatus === "fulfilled" &&
      dispatch(friendListRequest());
  };
  const handleRejected = () => {
    console.log("rejected");
  };
  const handleNameClick = (user) => {
    const userUrl = `/profile/${user.email}`;
    history.push(userUrl);
  };

  const { loading, error, requestList } = useSelector((state) => state.users);
  //   console.log(requestList);

  useEffect(() => {
    dispatch(friendListRequest());
  }, [dispatch]);

  const request_to_data = requestList?.request_to || [];
  const request_from_data = requestList?.request_from || [];

  return (
    <Container className="request-pending">
      <Row>
        <h5 className="request-pending__title">
          The following people have requested to be friends with you
        </h5>
        {loading === "pending" ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          requestList && (
            <div className="request-pending__people-to-you">
              <PeopleHaveRequested
                requestedList={request_from_data}
                onNameClick={handleNameClick}
                onRejectClick={handleRejected}
                onAcceptClick={handleAccept}
              />
            </div>
          )
        )}
      </Row>
      <Row>
        <h5 className="request-pending__title">
          You have requested to be friends with these people
        </h5>
        <div className="request-pending__you-to-people">
          <YouHaveRequested
            requestedList={request_to_data}
            onNameClick={handleNameClick}
            onCancelClick={handleRejected}
          />
        </div>
      </Row>
      <Button
        outline
        className="mt-3"
        style={{ float: "right" }}
        type="button"
        onClick={() => history.push("../profile")}
      >
        Close
      </Button>
    </Container>
  );
}

export default RequestPendingPage;
