import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import InsightsIcon from "@mui/icons-material/Insights";
import LabelIcon from "@mui/icons-material/Label";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Header from "../../components/Header";
import "./style.css";
import { useEffect, useState } from "react";
import ExpenseCategorySetting from "./ExpenseCategorySetting";
import api, { headersConfig } from "../../services/api";
import GoalSetting from "./GoalSetting";

const PersonalInformationSetting = (props) => {
  const { user } = props;
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

export default function UserSettings() {
  const [user, setUser] = useState({});
  const [selectedMenuItem, setSelectedMenuItem] = useState("profile");

  useEffect(() => {
    api
      .get("/api/v1/user", headersConfig())
      .then((response) => setUser(response.data))
      .catch((err) =>
        localStorage.removeItem(process.env.REACT_APP_HEADER_STRING)
      );
  }, []);

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
                  <ListItemButton
                    selected={selectedMenuItem === "goal"}
                    onClick={() => {
                      setSelectedMenuItem("goal");
                    }}
                  >
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
          {selectedMenuItem === "profile" ? (
            <PersonalInformationSetting user={user} />
          ) : selectedMenuItem === "expense-category" ? (
            <ExpenseCategorySetting />
          ) : selectedMenuItem === "goal" ? (
            <GoalSetting />
          ) : (
            ""
          )}
        </Grid2>
      </main>
    </>
  );
}
