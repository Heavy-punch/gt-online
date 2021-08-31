import NotFound from 'components/NotFound';
import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import RegisterPage from './pages/Register';
import SignInPage from './pages/SignIn';

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