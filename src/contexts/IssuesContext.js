import { createContext, useState, useEffect, useContext } from "react";

export const IssuesContext = createContext({});

export const useIssuesContext = () => useContext(IssuesContext);

export const IssuesProvider = ({ children }) => {
  const [issues, setIssues] = useState([]);
  const jsonKey = "Issues";

  useEffect(() => {
    const localStorageIssues = JSON.parse(localStorage.getItem(jsonKey));
    if (localStorageIssues) {
      setIssues(localStorageIssues);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(jsonKey, JSON.stringify(issues));
  }, [issues]);

  const addToIssues = (issue) => {
    setIssues([...issues, issue]);
  };

  const deleteFromIssues = (issue) => {
    setIssues(issues.filter((item) => item.id !== issue.id));
  };

  const submitEditToIssues = (issue) => {
    setIssues([...issues.filter((item) => item.id !== issue.id), issue]);
  };

  return (
    <IssuesContext.Provider
      value={{
        issues,
        addToIssues,
        deleteFromIssues,
        submitEditToIssues,
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
};
