import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import OAuth2RedirectHandler from './oauth2/OAuth2RedirectHandler';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Alert from 'react-s-alert';
import PrivateRoute from './common/PrivateRoute';
import AppHeader from './common/AppHeader';
import NotFound from './common/NotFound';
import { ACCESS_TOKEN } from './constants';
import { getCurrentUser } from './utils/APIUtils';
import LoadingIndicator from './common/LoadingIndicator';
import {Route, Routes} from 'react-router-dom';


const handleLogout = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  this.setState({
    authenticated: false,
    currentUser: null
  });
  Alert.success("You're safely logged out!");
}

function App() {

  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getCurrentUser()
    .then(response => {
      setCurrentUser(response);
      setAuthenticated(true);
      setLoading(false);
    }).catch(error => {
      setLoading(false);
    });
  }, [])

  return (
    loading ?
      <LoadingIndicator /> :
      <div className="app">
        <div className="app-top-box">
          <AppHeader authenticated={authenticated} onLogout={handleLogout} />
        </div>
        <div className="app-body">
          <Routes>
            <Route exact path="/" component={<Home/>}></Route>
            <PrivateRoute path="/profile" authenticated={authenticated} currentUser={currentUser}
              component={<Profile/>}></PrivateRoute>
            <Route path="/login"
              render={(props) => <Login authenticated={authenticated} {...props} />}></Route>
            {/* <Route path="/signup"
              render={(props) => <Signup authenticated={authenticated} {...props} />}></Route> */}
            <Route path="/oauth2/redirect" component={<OAuth2RedirectHandler/>}></Route>
            <Route component={<NotFound/>}></Route>
          </Routes>
        </div>
        <Alert stack={{ limit: 3 }}
          timeout={3000}
          position='top-right' effect='slide' offset={65} />
      </div>
  );
}

export default App;
