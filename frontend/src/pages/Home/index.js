import {
  Button,
  FormControl,
  InputLabel,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/system";
import { useState } from "react";
import SelectMonth from "../../components/SelectMonth";
import AttachMoney from "@mui/icons-material/AttachMoney";
import MoneyOff from "@mui/icons-material/MoneyOff";
import Chart from "react-apexcharts";

import "./style.css";

export default function Home() {
  const [category, setCategory] = useState("");
  const [goal, setGoal] = useState("");
  const series = [44, 55, 41, 17, 15];
  const labels = ['A', 'B', 'C', 'D', 'E'];
  const options = {series, labels};
  
  return (
    <>
      <header>
        <h1>FacilitaFin</h1>
        <h2>
          Oi Mabi! Por aqui já está tudo certo para facilitar suas finanças
        </h2>
      </header>
      <main id="home">
        <Grid2 container>
          <Grid2 md={4}>
            <Box sx={{ boxShadow: 3, padding: 2 }} textAlign="center">
              <h3>Receita</h3>

              <TextField
                id="outlined-basic"
                label="Valor"
                variant="outlined"
                fullWidth
              />
              <Grid2 container rowSpacing={2} justifyContent="space-between">
                <Grid2 xs={5.8}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Categoria
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={category}
                      label="Categoria"
                      onChange={setCategory}
                    >
                      <MenuItem value={""}>Salario</MenuItem>
                      <MenuItem value={""}>Freela</MenuItem>
                      <MenuItem value={""}>Renda extra</MenuItem>
                    </Select>
                  </FormControl>
                </Grid2>
                <Grid2 xs={5.8}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Meta</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={goal}
                      label="Meta"
                      onChange={setGoal}
                    >
                      <MenuItem value={""}>Viagem</MenuItem>
                      <MenuItem value={""}>Ar condicionado</MenuItem>
                      <MenuItem value={""}>Carro</MenuItem>
                    </Select>
                  </FormControl>
                </Grid2>
              </Grid2>
              <Button variant="contained" fullWidth>
                Adicionar
              </Button>
            </Box>

            <Box sx={{ boxShadow: 3, padding: 2 }} textAlign="center">
              <h3>Despesa</h3>
              <TextField
                id="outlined-basic"
                label="Valor"
                variant="outlined"
                fullWidth
              />

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Categoria"
                  onChange={setCategory}
                >
                  <MenuItem value={""}>Salario</MenuItem>
                  <MenuItem value={""}>Freela</MenuItem>
                  <MenuItem value={""}>Renda extra</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" color="secondary" fullWidth>
                Adicionar
              </Button>
            </Box>
          </Grid2>
          {/* TODO: refactor list component */}
          <Grid2 md={4} marginX={2}>
            <Box sx={{ boxShadow: 3, padding: 2 }} textAlign="center">
              <h3>Registros do mês</h3>
              <SelectMonth />
              <List component="nav" aria-label="main mailbox folders">
                {/* List button receita */}
                <ListItemButton component="a" href="#simple-list">
                  <ListItemIcon>
                    <AttachMoney color="success" />
                  </ListItemIcon>
                  <ListItemText primary="R$ 567,52" />
                  <ListItemText primary="Feira do mês" />
                  <ListItemText primary="Essenciais" />
                </ListItemButton>

                {/* List button despesa */}
                <ListItemButton component="a" href="#simple-list">
                  <ListItemIcon>
                    <MoneyOff color="error" />
                  </ListItemIcon>
                  <ListItemText primary="R$ 54,85" />
                  <ListItemText primary="Happy hour" />
                  <ListItemText primary="Essenciais" />
                </ListItemButton>
              </List>
            </Box>
          </Grid2>
          <Grid2 md={3.5}>
            <Box sx={{ boxShadow: 3, padding: 2 }} textAlign="center">
              <h3>Análise despesa/mês</h3>
              <div id="donut-chart">
                <Chart
                  options={options}
                  series={series}
                  labels={labels}
                  type="donut"
                  width="380"
                />
              </div>
            </Box>
          </Grid2>
        </Grid2>
      </main>
    </>
  );
}
