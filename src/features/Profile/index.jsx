import React from 'react';
import PropTypes from 'prop-types';
import { Switch, useRouteMatch, Route, Redirect } from 'react-router-dom';
import NotFound from 'components/NotFound';
import MainProfilePage from './pages/MainProfilePage';
import EditProfilePage from './pages/EditProfilePage';

Profile.propTypes = {

};

function Profile(props) {
    const match = useRouteMatch();

    return (
        <Switch>
            {/* <Redirect exact from={match.url} to={`${match.url}/sign-in`} /> */}
            <Route exact path={match.url} component={MainProfilePage} />
            <Route path={`${match.url}/edit`} component={EditProfilePage} />

            <Route component={NotFound} />
        </Switch>
    );
}

export default Profile;