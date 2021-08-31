import Images from 'constants/images';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import './Header.scss';

Header.propTypes = {};

function Header() {
    const history = useHistory();
    const handleClickLogo = () => {
        history.push("/profile")
    }
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-center">
                    <img className="header__logo" src={Images.LOGO} alt="logo" onClick={handleClickLogo} />
                </Row>
            </Container>
        </header>
    );
}

export default Header;