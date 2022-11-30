import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../constants";
import { Navigate } from 'react-router-dom';

const getUrlParameter = (name) => {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");

  var results = regex.exec(this.props.location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
};

export default function OAuth2NavigateHandler(props) {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    setToken(getUrlParameter("token"));
    setError(getUrlParameter("error"));
    if (token) localStorage.setItem(ACCESS_TOKEN, token);
  }, []);

  return token ? (
    <Navigate
      to={{
        pathname: "/profile",
        state: { from: props.location },
      }}
    />
  ) : (
    <Navigate
      to={{
        pathname: "/login",
        state: {
          from: props.location,
          error: error,
        },
      }}
    />
  );
}
