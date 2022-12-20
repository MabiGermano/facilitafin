import { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { Button, FormControl, TextField } from "@mui/material";
import mainLoginImg from "../../assets/imgs/mainlogin.png";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2

import "./style.css";

export default function Login() {
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
              fullWidth
            />
          </Grid2>
          <Grid2 item xs={8} marginBottom={2}>
            <TextField
              id="outlined-basic"
              label="Senha"
              variant="outlined"
              type="password"
              fullWidth
            />
          </Grid2>
          <Grid2 item xs={8} marginBottom={2}>
            <Button variant="contained" fullWidth>
              Entrar
            </Button>
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
        </Grid2>
      </FormControl>
      </Grid2>
    </main>
  );
}
