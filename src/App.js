import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import Header from "./Components/Header";
import ProjectsList from "./Components/ProjectsList";

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <ProjectsList />
      </div>
    </ThemeProvider>
  );
}

export default App;
