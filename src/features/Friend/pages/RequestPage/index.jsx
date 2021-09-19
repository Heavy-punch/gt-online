import { SEARCH_RESULT } from "constants/global";
import RequestForm from "features/Friend/components/RequestForm";
import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row } from "reactstrap";
import "./RequestPage.scss";

RequestPage.propTypes = {};

function RequestPage(props) {
  const { friendId } = useParams();
  const handleSubmit = () => {
    console.log("hello");
  };
  const data = SEARCH_RESULT;
  const requestFriend = data.filter((item) => item.id === +friendId);
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
          </Row>
        )}
      </Container>
    </div>
  );
}

export default RequestPage;
