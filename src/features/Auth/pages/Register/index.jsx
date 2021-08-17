import RegisterForm from 'features/Auth/components/RegisterForm';
import React, { useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import "./Register.scss";
import { useDispatch, useSelector } from 'react-redux';
import { ping, register } from 'features/Auth/authSlice';
import MessageBox from 'components/MessageBox'

RegisterPage.propTypes = {

};

function RegisterPage(props) {
    const dispatch = useDispatch();

    const { userInfo, loading, error } = useSelector(state => state.auth);

    const handleSubmit = (values) => {
        const param = {
            "email": values.email,
            "password": values.password,
            "password_confirmation": values.passwordConfirmation,
            "last_name": values.lastName,
            "first_name": values.firstName
        }
        dispatch(register(param));
    }

    return (
        <div className="register">
            <Container>
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <Row>
                    <div className="register__form">
                        <h1 className="register__title">Register</h1>
                        <RegisterForm
                            onSubmit={handleSubmit}
                            loading={loading}
                        />
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default RegisterPage;