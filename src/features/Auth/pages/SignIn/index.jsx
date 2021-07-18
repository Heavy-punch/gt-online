import SignInForm from 'features/Auth/components/SignInForm';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import "./SignIn.scss";

SignInPage.propTypes = {

};

function SignInPage(props) {
    const handleSubmit = () => {
        console.log("hello");
    }
    return (
        <div className="sign-in">
            <Container>
                <Row>
                    <div className="sign-in__form">
                        <h1 className="sign-in__title">Sign in</h1>
                        <SignInForm
                            onSubmit={handleSubmit}
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