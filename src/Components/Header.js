import { AppData } from "../Containers/Data.json";

const Header = (props) => {
  return (
    <header>
      <h1>{AppData.name}</h1>
    </header>
  );
};

export default Header;
