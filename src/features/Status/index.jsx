import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import StatusMainPage from './pages/StatusMainPage';
import NotFound from 'components/NotFound';

Status.propTypes = {

};

function Status(props) {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={match.url} component={StatusMainPage} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default Status;