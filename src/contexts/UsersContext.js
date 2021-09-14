import { createContext, useState, useEffect, useContext } from "react";

export const UsersContext = createContext({});

export const useUsersContext = () => useContext(UsersContext);

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const jsonKey = "Users";

  useEffect(() => {
    const localStorageUsers = JSON.parse(localStorage.getItem(jsonKey));
    if (localStorageUsers) {
      setUsers(localStorageUsers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(jsonKey, JSON.stringify(users));
  }, [users]);

  const addToUsers = (user) => {
    setUsers([...users, user]);
  };

  const deleteFromUsers = (user) => {
    setUsers(users.filter((item) => item.id !== user.id));
  };

  const submitEditToUsers = (user) => {
    setUsers([...users.filter((item) => item.id !== user.id), user]);
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        addToUsers,
        deleteFromUsers,
        submitEditToUsers,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
