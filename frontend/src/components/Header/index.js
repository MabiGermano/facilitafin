import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Link, useNavigate } from "react-router-dom";

const Header = (props) => {
  const { user } = props;
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(process.env.REACT_APP_HEADER_STRING)
    navigate("/");
  }

  return (
    <header>
      <Grid2 container marginBottom={5}>
        <Grid2 md={6} paddingLeft="1rem">
          <h1>FacilitaFin</h1>
          <h2>
            Oi {user.name}! Por aqui já está tudo certo para facilitar suas
            finanças
          </h2>
        </Grid2>
        <Grid2 container md={6} justifyContent="end">
          <Grid2
            md={4}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <nav>
              <Link to="/home">
                <IconButton aria-label="home" size="large">
                  <HomeIcon fontSize="large" />
                </IconButton>
              </Link>
              <Link to="/profile-settings">
                <IconButton aria-label="settings" size="large">
                  <SettingsIcon fontSize="large" />
                </IconButton>
              </Link>
              <IconButton aria-label="settings" size="large" onClick={handleLogout}>
                  <LogoutIcon fontSize="large" />
                </IconButton>
            </nav>
          </Grid2>
        </Grid2>
      </Grid2>
    </header>
  );
};

export default Header;
