import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import AppRoutes from "./routes";

import "./styles/global.css";

function App() {
  const THEME = createTheme({
    palette: {
      primary: {
        main: "#251CF1",
        contrastText: "#fff",
      },
    },
  });
  return (
    <ThemeProvider theme={THEME}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
