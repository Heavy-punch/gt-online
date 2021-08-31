import Images from 'constants/images';
import React from 'react';
import { Container, Row } from 'reactstrap';
import "./NotFound.scss";


NotFound.propTypes = {};

function NotFound() {
    return (
        <div className="not-found">
            <Container>
                <Row className="justify-content-center text-center align-items-center">
                    <img className="not-found__img" src={Images.NOTFOUND} alt="not found" />
                    <h2 className="not-found__message">Oopss! ... Page not found.</h2>
                </Row>
            </Container>


        </div>
    );
}

export default NotFound;