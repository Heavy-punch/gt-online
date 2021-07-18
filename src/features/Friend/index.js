import NotFound from 'components/NotFound';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import RequestPage from './pages/RequestPage';
import SearchPage from './pages/SearchPage';

Friend.propTypes = {

};

function Friend(props) {
    const match = useRouteMatch();

    return (
        <Switch>
            {/* <Redirect exact from={match.url} to={`${match.url}/sign-in`} /> */}
            <Route path={`${match.url}/request`} component={RequestPage} />
            <Route path={`${match.url}/search`} component={SearchPage} />


            <Route component={NotFound} />
        </Switch>
    );
}

export default Friend;