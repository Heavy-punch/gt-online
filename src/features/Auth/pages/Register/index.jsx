import RegisterForm from 'features/Auth/components/RegisterForm';
import React from 'react';
import { Container, Row } from 'reactstrap';
import "./Register.scss";

RegisterPage.propTypes = {

};

function RegisterPage(props) {
    const handleSubmit = (values) => {
        // console.log("values:", values);
    }
    return (
        <div className="register">
            <Container>
                <Row>
                    <div className="register__form">
                        <h1 className="register__title">Register</h1>
                        <RegisterForm
                            onSubmit={handleSubmit}
                        />
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default RegisterPage;