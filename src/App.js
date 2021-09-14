import { createTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Routes from "./routes";

const theme = createTheme({
  palette: {
    primary: {
      main: "#232c2f",
    },
    secondary: {
      main: "#fdcd47",
    },
  },
});

const useStyles = makeStyles({
  flex: {
    display: "flex",
    flexDirection: "row",
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Header />
          <div className={classes.flex}>
            <SideBar />
            <div className="content">
              <Routes />
            </div>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
