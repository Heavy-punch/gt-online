import NotFound from 'components/NotFound';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import StatusMainPage from './pages/StatusMainPage';

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