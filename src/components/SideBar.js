import CreateButton from "./CreateButton";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { NavLink as RouterLink } from "react-router-dom";

const useStyles = makeStyles({
  navbar: {
    height: "100%",
    width: "240px",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - 64px)",
  },
  createButton: {
    display: "inherit",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const SideBar = (props) => {
  const classes = useStyles();

  const pages = ["Dashboard", "Projects", "Issues", "Settings"];

  return (
    <nav className={classes.navbar}>
      <Paper className={classes.paper} variant="outlined">
        <Paper square className={classes.createButton} variant="outlined">
          <CreateButton />
        </Paper>
        <Paper square variant="outlined">
          <ul>
            {pages.map((page, i) => {
              return (
                <li key={page + i}>
                  <RouterLink
                    activeClassName="active-link"
                    to={"/" + page.toLowerCase()}
                  >
                    {page}
                  </RouterLink>
                </li>
              );
            })}
          </ul>
        </Paper>
      </Paper>
    </nav>
  );
};

export default SideBar;
