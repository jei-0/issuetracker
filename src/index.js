import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./styles/index.css";
import App from "./App";
import { ProjectsProvider } from "./contexts/ProjectsContext";
import { IssuesProvider } from "./contexts/IssuesContext";
import { UsersProvider } from "./contexts/UsersContext";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ProjectsProvider>
      <IssuesProvider>
        <UsersProvider>
          <App />
        </UsersProvider>
      </IssuesProvider>
    </ProjectsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
