import { SEARCH_RESULT } from 'constants/global';
import SignInForm from 'features/Auth/components/SignInForm';
import PeopleHaveRequested from 'features/Friend/components/PeopleHaveRequested';
import YouHaveRequested from 'features/Friend/components/YouHaveRequested';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Container, Row } from 'reactstrap';
import "./RequestPendingPage.scss";

RequestPendingPage.propTypes = {

};

function RequestPendingPage(props) {
    const data = SEARCH_RESULT;
    const history = useHistory();

    const handleAccept = () => {
        console.log("accepted");
    }
    const handleRejected = () => {
        console.log("rejected");
    }
    const handleNameClick = (user) => {
        const userUrl = `../profile/${user.id}`
        history.push(userUrl);
    }

    return (
        <Container className="request-pending">
            <Row>
                <h5 className="request-pending__title">The following people have requested to be friends with you</h5>
                <div className="request-pending__people-to-you">
                    <PeopleHaveRequested
                        requestedList={data}
                        onNameClick={handleNameClick}
                        onRejectClick={handleRejected}
                        onAcceptClick={handleAccept}
                    />
                </div>
            </Row>
            <Row>
                <h5 className="request-pending__title">You have requested to be friends with these people</h5>
                <div className="request-pending__you-to-people">
                    <YouHaveRequested
                        requestedList={data}
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