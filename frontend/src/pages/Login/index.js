import { useEffect, useState } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { Button, FormControl, TextField } from "@mui/material";
import mainLoginImg from "../../assets/imgs/mainlogin.png";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2

import { Link } from "react-router-dom";
import "./style.css";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
  console.log(process.env.REACT_APP_CLIENT_ID);

  const handleLogin = (event) => {
    event.preventDefault();
    

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
          <Grid2 item xs={8} marginBottom={2}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <Link to="/home">
            <Button variant="contained" fullWidth >
              Entrar
            </Button>
            </Link>
          </Grid2>
          <Grid2 item xs={8} marginBottom={2}>
            <GoogleLogin
              style={{boxShadow: "none", borderWidth: 2,  boderColor: "grey", boderStyle: "solid"}}
              className="google-button"
              clientId={process.env.CLIENT_ID}
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
