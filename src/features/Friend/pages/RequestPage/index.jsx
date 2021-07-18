import SignInForm from 'features/Auth/components/SignInForm';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import "./RequestPage.scss";

RequestPage.propTypes = {

};

function RequestPage(props) {
    const handleSubmit = () => {
        console.log("hello");
    }
    return (
        <div className="request">
            <Container>
                <Row>
                    <h1>hello request</h1>
                </Row>
            </Container>
        </div>
    );
}

export default RequestPage;