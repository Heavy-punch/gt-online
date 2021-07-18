import Auth from 'features/Auth';
import Friend from 'features/Friend';
import Profile from 'features/Profile';
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
            <Redirect exact from="/" to="/auth" />
            <Route path="/auth" component={Auth} />
            <Route path="/profile" component={Profile} />
            <Route path="/friend" component={Friend} />
            <Route component={NotFound} />
          </Switch>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
