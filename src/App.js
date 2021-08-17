import PrivateRoute from 'components/PrivateRoute';
import Auth from 'features/Auth';
import Friend from 'features/Friend';
import Profile from 'features/Profile';
import Status from 'features/Status';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="gt-online">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Switch>
            <Redirect exact from="/" to="/profile" />
            <Route path="/auth" component={Auth} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/friend" component={Friend} />
            <PrivateRoute path="/status" component={Status} />
            <Route component={NotFound} />
          </Switch>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
