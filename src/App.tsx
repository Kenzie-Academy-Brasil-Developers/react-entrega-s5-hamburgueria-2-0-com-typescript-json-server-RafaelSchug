import "./App.css";
import Routes from "./routes";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#27AE60",
    },
    secondary: {
      main: "#EB5757",
    },
    text: {
      secondary: "#27AE60",
    },
  },
  typography: {
    fontFamily: `"Inter", "Roboto", "sans-serif"`,
    h3: {
      fontSize: "18px",
      fontWeight: "bold",
    },
    body1: {
      fontSize: "14px",
      fontWeight: 600,
    },
  },
});

function App() {
  console.log(theme.components);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes></Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
