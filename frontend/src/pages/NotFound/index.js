import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main id="not-found-page">
      <Grid2 container justifyContent="center">
        <Grid2 md={8} marginBottom={5}>
          <header>
            <Link to={"/home"} style={{ textDecoration: "none" }}>
              <h1>FacilitaFin</h1>
            </Link>
            <h2>Página não encontrada</h2>
          </header>
        </Grid2>
        <Grid2 md={8}>
          <iframe
            title="not-found-gif"
            src="https://giphy.com/embed/sdLSQGV9BQRKU"
            width="480"
            height="247"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </Grid2>
      </Grid2>
    </main>
  );
};

export default NotFound;
