import {
  createTheme, createStyles, makeStyles, Theme,
} from "@material-ui/core/styles";
import { StyleRules } from "@material-ui/styles/withStyles";

const drawerWidth = 280;

const stInputStyles = (theme: Theme): StyleRules<Record<string, unknown>, "inputRoot" | "inputInput"> => ({
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    paddingLeft: "40px",
    paddingRight: "20px",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "15ch",
      "&:focus": {
        width: "18ch",
      },
    },
  },
});

const stSearchInputStyles = (theme: Theme): StyleRules<Record<string, unknown>, "search" | "searchIcon"> => ({
  search: {
    position: "relative",
    margin: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    lineHeight: "38px",
    left: "13px",
    top: 0,
  },
});

const stDrawerStyles = (
  theme: Theme,
): StyleRules<Record<string, unknown>, "drawer" | "drawerOpen" | "drawerOpenWrapText" | "drawerClose"> => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    "&>.MuiDrawer-paper": {
      display: "initial",
      overflowY: "hidden",
      "z-index": 1,
      "padding-top": "75px",
    },
    "& .MuiListItem-gutters": {
      padding: "0.40rem 1rem",
    },
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerOpenWrapText: {
    "& .MuiListItem-root .MuiListItemText-root span": {
      whiteSpace: "pre-wrap !important",
    },
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: "0",
    [theme.breakpoints.up("sm")]: {
      width: "70px !important",
    },
  },
});

const stAppbarStyles = (
  theme: Theme,
): StyleRules<
  Record<string, unknown>,
  "appBar" | "popupMenuRoot" | "menuButton" | "hide" | "popupNotificationRoot"
> => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  popupMenuRoot: {
    zIndex: (theme.zIndex.appBar + 400),
    "& .MuiPaper-root": {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
  },
  popupNotificationRoot: {
    zIndex: (theme.zIndex.appBar + 400),
    width: "25rem",
    maxHeight: "50vh",
    fontSize: "0.8125rem",
    "& .MuiPaper-root": {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
  },
  menuButton: {
    marginRight: 8,
  },
  hide: {
    display: "none",
  },
});

const stOtherStyles = (theme: Theme): StyleRules<
Record<string, unknown>,
"toolbar" | "content" | "image" | "sectionDesktop"
> => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    overflowY: "hidden",
    overflowX: "auto",
  },
  image: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "28",
    height: "28",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up(800)]: {
      display: "flex",
    },
  },
});

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: "flex",
  },
  ...stAppbarStyles(theme),
  ...stDrawerStyles(theme),
  ...stOtherStyles(theme),
  sectionDesktopTypography: {
    fontSize: "0.8125rem!important",
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
  appBarFavorites: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  footer: {
    zIndex: theme.zIndex.drawer + 1,
    padding: theme.spacing(0, 1),
    height: 34,
    overflow: "hidden",
  },
  grow: {
    flexGrow: 1,
  },
  ...stSearchInputStyles(theme),
  ...stInputStyles(theme),
}));

export const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: "rgb(49, 53, 65)",
      },
    },
    MuiListItem: {
      root: {
        "&.activeLink": {
          marginLeft: "16px",
          backgroundColor: "#5a607166",
          borderRadius: "30px 0px 0px 30px",
          ".MuiListItemText-root": {},
        },
      },
    },
  },

});

export default useStyles;
