import MessageBox from 'components/MessageBox';
import { login } from 'features/Auth/authSlice';
import SignInForm from 'features/Auth/components/SignInForm';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import "./SignIn.scss";

SignInPage.propTypes = {

};

function SignInPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { userInfo, loading, error } = useSelector(state => state.auth);
    // console.log(userInfo);

    const handleSubmit = (values) => {
        const param = {
            "email": values.email,
            "password": values.password,
        }
        dispatch(login(param));
    }

    useEffect(() => {
        if (userInfo) {
            history.push("/profile");
        }
    }
        , [dispatch, userInfo]);

    return (
        <div className="sign-in">
            <Container>
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <Row>
                    <div className="sign-in__form">
                        <h1 className="sign-in__title">Sign in</h1>
                        <SignInForm
                            onSubmit={handleSubmit}
                            loading={loading}
                        />
                        <div className="sign-in__register-link">
                            <Link to="/auth/register" >create new account?</Link>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default SignInPage;