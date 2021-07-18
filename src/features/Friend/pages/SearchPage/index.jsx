import RegisterForm from 'features/Auth/components/RegisterForm';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import "./SearchPage.scss";

SearchPage.propTypes = {

};

function SearchPage(props) {
    const handleSubmit = (values) => {
        // console.log("values:", values);
    }
    return (
        <div className="search">
            <Container>
                <Row>
                    <h1>hello search</h1>
                    <Link to="/profile">back to profile</Link>
                </Row>
            </Container>
        </div>
    );
}

export default SearchPage;