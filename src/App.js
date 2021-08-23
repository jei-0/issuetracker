import Header from "./Components/Header";
import ProjectsList from "./Components/ProjectsList";
import { DefaultInitialProject } from "./Containers/Data";

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectsList data={DefaultInitialProject} />
    </div>
  );
}

export default App;
