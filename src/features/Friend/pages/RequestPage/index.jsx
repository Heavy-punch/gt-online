import { SEARCH_RESULT } from 'constants/global';
import SignInForm from 'features/Auth/components/SignInForm';
import RequestForm from 'features/Friend/components/RequestForm';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import "./RequestPage.scss";

RequestPage.propTypes = {

};

function RequestPage(props) {
    const { friendId } = useParams();
    const handleSubmit = () => {
        console.log("hello");
    }
    const data = SEARCH_RESULT;
    console.log(data);
    const requestFriend = data.filter((item) => item.id === +friendId);
    console.log(requestFriend);
    return (
        <div className="request">
            <Container>
                {requestFriend.length !== 1 ? (
                    <h1>sorry user is not exist</h1>
                )
                    : (
                        <Row>
                            <h1 className="search__title">Request New Friend For {" " + requestFriend[0].firstName + " " + requestFriend[0].lastName}</h1>
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