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
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes></Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
