import { Button, FormControl, Icon, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";

import { Link } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import api from "../../services/api";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //TODO: refactor this code
  const handleSubmit = (event) => {
    event.preventDefault();
    if(password == confirmPassword) {
      api.post("/api/v1/user",
       { name, email, password }).then((_) => {
        alert("Usuário criado com sucesso");
        setEmail("");
        setName("");
        setConfirmPassword("");
        setPassword("");
       });
    }else {
      alert("Senhas não correspondem");
    }
  }
  return (
    <main id="new-user">
      <Link to="/">
        <IconButton size="large">
          <ArrowBackIcon fontSize="large" />
        </IconButton>
      </Link>
      <Grid2 container xs={8} justifyContent="center">
        <h1>cadastro</h1>
        <FormControl columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid2 container justifyContent="center">
            <Grid2 item xs={5} margin={2}>
              <TextField
                id="outlined-basic"
                label="Nome"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid2>
            <Grid2 item xs={5} margin={2}>
              <TextField
                id="outlined-basic"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid2>

            <Grid2 item xs={5} margin={2}>
              <TextField
                id="outlined-basic"
                label="Senha"
                variant="outlined"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid2>
            <Grid2 item xs={5} margin={2}>
              <TextField
                id="outlined-basic"
                label="Confirmação de senha"
                variant="outlined"
                type="password"
                fullWidth
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Grid2>

            <Grid2 item xs={8} marginBottom={2}>
              <Button variant="contained" fullWidth onClick={handleSubmit}>
                Salvar
              </Button>
            </Grid2>
          </Grid2>
        </FormControl>
      </Grid2>
    </main>
  );
}
