import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { ImHome } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { RiHandbagFill } from "react-icons/ri";
import "./Navbar.scss";

import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";

var drawerWidth = "15%";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontSize: "16px",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "padding"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    paddingLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth})`,
    transition: theme.transitions.create(["width", "padding"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    paddingRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <section className="Navbar">
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Sumaiya Yahia Rashad
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <FiChevronRight />
              ) : (
                <FiChevronRight />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {[
              <Link to="/" className="text-decoration-none text-secondary">
                HOME
              </Link>,
              <Link to="/about" className="text-decoration-none text-secondary">
                ABOUT
              </Link>,
              <Link
                to="/portfolio"
                className="text-decoration-none text-secondary"
              >
                PORTFOLIO
              </Link>,
              <Link
                to="/contact"
                className="text-decoration-none text-secondary"
              >
                CONTACT
              </Link>,
            ].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {(() => {
                    switch (index) {
                      case 0:
                        return (
                          <Link
                            className="text-decoration-none text-secondary"
                            to="/"
                          >
                            <ImHome className="h4" />
                          </Link>
                        );
                      case 1:
                        return (
                          <Link
                            className="text-decoration-none text-secondary"
                            to="/about"
                          >
                            <FaUserAlt className="h4" />
                          </Link>
                        );
                      case 2:
                        return (
                          <Link
                            className="text-decoration-none text-secondary"
                            to="/portfolio"
                          >
                            <RiHandbagFill className="h4" />
                          </Link>
                        );
                      case 3:
                        return (
                          <Link
                            className="text-decoration-none text-secondary"
                            to="/contact"
                          >
                            <MdContactMail className="h4" />
                          </Link>
                        );
                    }
                  })()}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
      </div>
    </section>
  );
}

export default Navbar;
