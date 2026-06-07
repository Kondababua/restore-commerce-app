import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const MidLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const RightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

const navStyles = {
  color: "inherit",
  typography: "h6",
  textDecoration: "none",
  "&:hover": { color: "grey.500" },
  "&.active": { color: "#baecf9" },
};

type Props = {
  toggleDarkMode: () => void;
  darkMode: boolean;
};

export default function NavBar({ toggleDarkMode, darkMode }: Props) {
  return (
    <AppBar position="fixed" sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h6" component={NavLink} sx={navStyles} to="/">
            RE-STORE
          </Typography>
          <IconButton onClick={toggleDarkMode}>
            {darkMode ? <DarkMode /> : <LightMode sx={{ color: "yellow" }} />}
          </IconButton>
        </Box>

        <List sx={{ display: "flex", ml: 2 }}>
          {MidLinks.map(({ title, path }) => (
            <ListItem key={path} component={NavLink} to={path} sx={navStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton size="large" sx={{ color: "inherit" }}>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>

          <List sx={{ display: "flex", ml: 2 }}>
            {RightLinks.map(({ title, path }) => (
              <ListItem key={path} component={NavLink} to={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
