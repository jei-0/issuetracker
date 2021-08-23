import { LocalStorageProjectsKey } from "./Data";

const SaveLocalData = ({ data }) => {
  localStorage.setItem(LocalStorageProjectsKey, JSON.stringify(data));
};

export default SaveLocalData;
