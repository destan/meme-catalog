import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DrawerMenu from "./DrawerMenu";
import ImageGrid from "./ImageGrid";
import Fab from '@material-ui/core/Fab';
import CachedIcon from '@material-ui/icons/Cached';
import EE, {EVENT} from './EventEmitter';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  title: {
    flexGrow: 1
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    width: '100%',
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  }
}));

function enrichFile(file) {
  if (!file.type.startsWith('image/')){ return } //FIXME include videos

  file.url = window.URL.createObjectURL(file);

  const reader = new FileReader();
  reader.onload = dataUrl => file.data = dataUrl;
  reader.readAsDataURL(file);
}

async function chooseFolder() {

  //FIXME check if window.chooseFileSystemEntries available if not force user to enable feature chrome://flags/#native-file-system-api

  const files = [];

  const options = {type: 'openDirectory'};
  const fileHandle = await window.chooseFileSystemEntries(options);
  const entries = await fileHandle.getEntries();
  for await (const entry of entries) {

    if (entry.isFile) {
      const file = await entry.getFile();
      enrichFile(file);
      if (file.url) {// omit non image files
        files.push(file);
      }
    }
  }

  EE.emit(EVENT.FILES_CHANGED, files);
}

export default function App() {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  return (
    <Box display='flex' height='100%'>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Meme Catalog
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <DrawerMenu open={open} onToggle={isOpen => setOpen(isOpen)} />

      <Fab color="primary" className={classes.fab} onClick={chooseFolder}>
        <CachedIcon />
      </Fab>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        
        <ImageGrid />

        <Box pt={4}>
          <Copyright />
        </Box>
      </main>
    </Box>
  );
}
