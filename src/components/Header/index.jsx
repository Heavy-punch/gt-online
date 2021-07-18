import Images from 'constants/images';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';

Header.propTypes = {};

function Header() {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-center">
                    <img className="header__logo" src={Images.LOGO} alt="logo" />
                </Row>
            </Container>
        </header>
    );
}

export default Header;