import Projects from "./components/Projects";
import CreateForm from "./components/CreateForm";
import { Route, Switch } from "react-router-dom";
import Issues from "./components/Issues";

export default function Routes() {
  return (
    <Switch>
      <Route path="/edit/:id">
        <CreateForm />
      </Route>
      <Route exact path="/projects/create">
        <CreateForm fresh />
      </Route>
      <Route exact path="/issues/create">
        <CreateForm fresh />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
      <Route exact path="/issues">
        <Issues />
      </Route>
      <Route path="/settings">{/* <Settings /> */}</Route>
      <Route exact path={"/" || "/home" || "/dashboard"}>
        {/* <Dashboard /> */}
      </Route>
    </Switch>
  );
}
