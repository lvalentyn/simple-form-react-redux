import { useSelector } from 'react-redux';
import LoginPage from './components/LoginPage/LoginPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  const state = useSelector(state => state.auth);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/profile'>
            <ProfilePage login={state.login} />
          </Route>
          <Route exact path='/'>
            <h1>Login</h1>
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
