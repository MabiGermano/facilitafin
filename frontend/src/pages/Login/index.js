import { useEffect, useState } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { Button, FormControl, TextField } from "@mui/material";
import mainLoginImg from "../../assets/imgs/mainlogin.png";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2


import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [warningMessage, setWarningMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_CLIENT_ID,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = (res) => {
    console.log("success:", res);
  };
  const onFailure = (err) => {
    console.log("failed:", err);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    api.post("/api/v1/user/login",
    { username, password })
    .then((response) => {
     localStorage.setItem(process.env.REACT_APP_HEADER_STRING, `${response.data}`) 
     navigate("/home");
    })
    .catch((erro) => {
      console.log(erro);
      setWarningMessage("Username ou senha não cadastrados!")});
  }
  return (
    <main>
      <Grid2 container xs={5}>
      <img src={mainLoginImg} alt="Projections"/>
      </Grid2>
      <Grid2 container xs={5} justifyContent="center">
        <h1>FacilitaFin</h1>
      <FormControl columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid2 container justifyContent="center">
          <Grid2 item xs={8} marginBottom={1} textAlign="center">
            <p className="warning">{warningMessage}</p>
          </Grid2>
          <Grid2 item xs={8} marginBottom={2}>
            <TextField
              id="outlined-basic"
              label="Username (Email)"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
            />
          </Grid2>
          <Grid2 item xs={8} marginBottom={2}>
            <TextField
              id="outlined-basic"
              label="Senha"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />
          </Grid2>
          <Grid2 item xs={8} marginBottom={2}>
            <Button variant="contained" fullWidth onClick={handleLogin}>
              Entrar
            </Button>
          </Grid2>
          <Grid2 item xs={8} marginBottom={2}>
            <GoogleLogin
              style={{boxShadow: "none", borderWidth: 2,  boderColor: "grey", boderStyle: "solid"}}
              className="google-button"
              clientId={process.env.REACT_APP_CLIENT_ID}
              buttonText="Login com o Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          </Grid2>
          <Grid2 item xs={8} marginBottom={2} textAlign="center">
            <h5>Novo por aqui? <Link to="/user/new">Cadastre-se </Link> </h5>
          </Grid2>
        </Grid2>
      </FormControl>
      </Grid2>
    </main>
  );
}
