import {
  Button,
  Divider,
  FormControl,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import InsightsIcon from "@mui/icons-material/Insights";
import LabelIcon from "@mui/icons-material/Label";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Header from "../../components/Header";
import "./style.css";
import { useState } from "react";
import { Box } from "@mui/system";

const renderPersonalInformation = (user) => {
  return (
    <Grid2 rowSpacing={2} md={9.9} textAlign="center">
      <Grid2 container justifyContent="center">
        <Grid2 md={12}>
          <h2>Informações gerais</h2>
        </Grid2>
        <Grid2 md={6}>
          <h4>Nome</h4>
          {user.name}
        </Grid2>
        <Grid2 md={6}>
          <h4>Username</h4>
          {user.username}
        </Grid2>
      </Grid2>
      <Grid2 container>
        <Grid2 md={6}>
          <h4>Email</h4>
          {user.email}
        </Grid2>
        <Grid2 container md={6} justifyContent="center">
          <Grid2
            md={6}
            display="flex"
            flexDirection="column"
            justifyContent="end"
          >
            <Button variant="contained" color="error" fullWidth>
              Excluir Conta
            </Button>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

const renderExpenseCategory = () => {
  return (
    <Grid2 rowSpacing={2} md={9.9} textAlign="center">
      <Grid2 container justifyContent="center">
        <Grid2 md={12}>
          <h2>Categorias de despesas</h2>
        </Grid2>
        <Grid2 md={10}>
          <Box sx={{ boxShadow: 3, padding: 2 }} textAlign="center">
            <h3>Nova categoria</h3>
            <FormControl fullWidth>
              <Grid2 container rowSpacing={2} justifyContent="space-between">
                <Grid2 md={12}>
                  <TextField
                    id="outlined-basic"
                    label="Descrição"
                    variant="outlined"
                    fullWidth
                  />
                </Grid2>
                <Grid2 md={12}>
                  <Button variant="contained" color="secondary" fullWidth>
                    Adicionar
                  </Button>
                </Grid2>
              </Grid2>
            </FormControl>
          </Box>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default function UserSettings(props) {
  //   const { user } = props;
  const user = {
    name: "mabi",
    username: "mabi@teste.com",
    email: "mabi@teste.com",
  };
  const [content, setContent] = useState(renderPersonalInformation(user));
  const [selectedMenuItem, setSelectedMenuItem] = useState("profile");

  return (
    <>
      <Header user={user} />
      <main id="user-settings">
        <Grid2 container>
          <Grid2 md={2}>
            <nav>
              <List>
                <h4>Geral</h4>
                <ListItem disablePadding>
                  <ListItemButton
                    selected={selectedMenuItem === "profile"}
                    onClick={() => {
                      setContent(renderPersonalInformation(user));
                      setSelectedMenuItem("profile");
                    }}
                  >
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Perfil" />
                  </ListItemButton>
                </ListItem>
                <h4>Customizar workspace</h4>
                <ListItem disablePadding>
                  <ListItemButton selected={selectedMenuItem === "goal"}>
                    <ListItemIcon>
                      <InsightsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Metas" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    selected={selectedMenuItem === "expense-category"}
                    onClick={() => {
                      setContent(renderExpenseCategory());
                      setSelectedMenuItem("expense-category");
                    }}
                  >
                    <ListItemIcon>
                      <LabelIcon />
                    </ListItemIcon>
                    <ListItemText primary="Categorias de despesa" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Grid2>
          <Divider orientation="vertical" />
          {content}
        </Grid2>
      </main>
    </>
  );
}
