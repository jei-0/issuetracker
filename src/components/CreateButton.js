import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const CreateButton = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  return (
    <div>
      <label>
        <button onClick={() => setOpenMenu(!openMenu)}>+</button> Create
      </label>
      {openMenu && (
        <div>
          <ul>
            <li>
              <Link to="/projects/create">New Project</Link>
            </li>
            <li>
              <Link to="/issues/create">New Issue</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CreateButton;
