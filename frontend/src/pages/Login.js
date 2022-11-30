import { useEffect } from "react";
import Alert from 'react-s-alert';
import LoginForm from "../components/LoginForm";
import { GOOGLE_AUTH_URL } from "../constants";
import { Navigate, Link } from 'react-router-dom';

export default function Login(props) {
  useEffect(() => {
    if (props.location.state && props.location.state.error) {
      setTimeout(() => {
        Alert.error(props.location.state.error, {
          timeout: 5000,
        });
        props.history.replace({
          pathname: props.location.pathname,
          state: {},
        });
      }, 100);
    }
  }, []);

  return props.authenticated ? (
    <Navigate
      to={{
        pathname: "/",
        state: { from: props.location },
      }}
    />
  ) : (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title">Login to SpringSocial</h1>
        <div className="social-login">
          <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"} alt="Google" /> Log in with Google
          </a>
        </div>
        <div className="or-separator">
          <span className="or-text">OR</span>
        </div>
        <LoginForm {...props} />
        <span className="signup-link">
          New user? <Link to="/signup">Sign up!</Link>
        </span>
      </div>
    </div>
  );
}


