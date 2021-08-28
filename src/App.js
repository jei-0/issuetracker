import "normalize.css";
import "./Styles/App.css";
import Header from "./Components/Header";
import ProjectsList from "./Components/ProjectsList";

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectsList />
    </div>
  );
}

export default App;
