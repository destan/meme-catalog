import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Link from '@material-ui/core/Link';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import WarningIcon from '@material-ui/icons/Warning';

const isIOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const useStyles = makeStyles({
  drawer: {
    width: '75%',
    
    '& .MuiPaper-root.MuiDrawer-paper': {
      width: '75%'
    }
  },
  swipeArea: {
    height: 'calc(100% - 56px)',
    top: 'auto',
    bottom: 0,
  }
});

export default function DrawerMenu(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);

    if (typeof props.onToggle === 'function') {
      props.onToggle(open);
    }
  };

  return (
    <SwipeableDrawer
      SwipeAreaProps={{className: classes.swipeArea}}
      disableBackdropTransition={!isIOS} disableDiscovery={isIOS}
      swipeAreaWidth={30}
      className={classes.drawer}
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <div
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          <ListItem button key='native-file-system'>
            <ListItemIcon>
              <WarningIcon color='action' />
            </ListItemIcon>
            <Link href="chrome://flags/#native-file-system-api" target='_blank' color="inherit" rel="noreferrer">
              {'Enable Native File System'}
            </Link>
          </ListItem>

          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </SwipeableDrawer>
  );
}
