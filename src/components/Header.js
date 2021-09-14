import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";

const Header = (props) => {
  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Typography noWrap variant="h6">
            IssueTracker
          </Typography>
          <div>
            <IconButton color="inherit" aria-label="show mails">
              <MailIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="show notifications">
              <NotificationsIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="go to settings">
              <SettingsIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
