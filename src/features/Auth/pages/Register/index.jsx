import MessageBox from 'components/MessageBox';
import { register } from 'features/Auth/authSlice';
import RegisterForm from 'features/Auth/components/RegisterForm';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import "./Register.scss";

RegisterPage.propTypes = {

};

function RegisterPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();

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
    useEffect(() => {
        if (userInfo) {
            history.push("/profile");
        }
    }
        , [dispatch, userInfo]);

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