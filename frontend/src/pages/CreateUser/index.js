import { Button, FormControl, Icon, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";

import { Link } from "react-router-dom";
import "./style.css";

export default function CreateUser() {
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
              />
            </Grid2>
            <Grid2 item xs={5} margin={2}>
              <TextField
                id="outlined-basic"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
              />
            </Grid2>

            <Grid2 item xs={5} margin={2}>
              <TextField
                id="outlined-basic"
                label="Senha"
                variant="outlined"
                type="password"
                fullWidth
              />
            </Grid2>
            <Grid2 item xs={5} margin={2}>
              <TextField
                id="outlined-basic"
                label="Confirmação de senha"
                variant="outlined"
                fullWidth
              />
            </Grid2>

            <Grid2 item xs={8} marginBottom={2}>
              <Button variant="contained" fullWidth>
                Salvar
              </Button>
            </Grid2>
          </Grid2>
        </FormControl>
      </Grid2>
    </main>
  );
}
