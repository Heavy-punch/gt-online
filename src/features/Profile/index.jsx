import NotFound from "components/NotFound";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import EditProfilePage from "./pages/EditProfilePage";
import MainProfilePage from "./pages/MainProfilePage";

Profile.propTypes = {};

function Profile(props) {
  const match = useRouteMatch();

  return (
    <Switch>
      {/* <Redirect exact from={match.url} to={`${match.url}/sign-in`} /> */}
      <Route exact path={match.url} component={MainProfilePage} />
      <Route exact path={`${match.url}/edit`} component={EditProfilePage} />
      <Route path={`${match.url}/:email`} component={MainProfilePage} />

      <Route component={NotFound} />
    </Switch>
  );
}

export default Profile;
