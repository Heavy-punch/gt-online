import React from 'react';
import PropTypes from 'prop-types';
import { Switch, useRouteMatch, Route, Redirect } from 'react-router-dom';
import NotFound from 'components/NotFound';
import SignInPage from './pages/SignIn';
import RegisterPage from './pages/Register';

Auth.propTypes = {

};

function Auth(props) {
    const match = useRouteMatch();

    return (
        <Switch>
            <Redirect exact from={match.url} to={`${match.url}/sign-in`} />
            <Route path={`${match.url}/sign-in`} component={SignInPage} />
            <Route path={`${match.url}/register`} component={RegisterPage} />

            <Route component={NotFound} />
        </Switch>
    );
}

export default Auth;