import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Switch,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import AppLogo from '../../assets/Syntrack_logo_full.svg'
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";



const Home: React.FC = () => {
    const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
   
    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) =>
      setAnchorEl(event.currentTarget);
    const handleProfileMenuClose = () => setAnchorEl(null);

  // Handler to toggle the navigation bar
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Header */}
      <AppBar
        position="fixed"
        
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,backgroundColor:"white"
        }}
      >
        <Toolbar>
          {/* Collapsible Icon */}
          <IconButton
            edge="start"
            // color="inherit"
            onClick={toggleNav}
            sx={{ marginRight: 2 }}
          >
            <MenuIcon sx={{height:20, width:20}} />
          </IconButton>

          {/* App Logo */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={AppLogo} style={{height:40,marginTop:5}}/>
          </Typography>

    

          

          {/* Notification Icon */}
          <IconButton >
            <NotificationsIcon sx={{height:20, width:20}} />
          </IconButton>

          {/* Profile Avatar */}
          <IconButton onClick={handleProfileMenuOpen}>
                <Avatar  sx={{height:20, width:20}} />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleProfileMenuClose}
              >
                <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleProfileMenuClose}>
                <span  onClick={() => navigate("/")}>   
                Logout
                </span>
               
                </MenuItem>
              </Menu>
        </Toolbar>
      </AppBar>

      {/* Side Navigation Bar */}
      <Drawer
  variant="permanent"
  sx={{
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: isNavOpen ? 240 : 60,
      transition: "width 0.3s",
      boxSizing: "border-box",
      overflow: "hidden",
    },
  }}
>
  {/* Side Nav Header */}
  <Toolbar>
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
      <Typography variant="h6" noWrap>
        {isNavOpen ? "MyApp" : ""}
      </Typography>
      <Switch checked={isNavOpen} onChange={toggleNav} />
    </Box>
  </Toolbar>

  {/* Navigation Items */}
  <List>
    {[
      { text: "Home", icon: <HomeIcon /> },
      { text: "About", icon: <InfoIcon /> },
      { text: "Settings", icon: <SettingsIcon /> }
    ].map((item) => (
        <List>
        {[
          { text: "Home", icon: <HomeIcon  /> },
          { text: "About", icon: <InfoIcon /> },
          { text: "Settings", icon: <SettingsIcon /> },
        ].map((item) => (
          <ListItem key={item.text} component="button"  sx={{
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "#DEECEA", 
            },
            color: "black", 
          }}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            {isNavOpen && <ListItemText primary={item.text} />}
          </ListItem>
        ))}
      </List>
    ))}
  </List>
</Drawer>

      {/* Dynamic Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginLeft: isNavOpen ? "240px" : "60px",
          transition: "margin-left 0.3s",
          display: "flex",
          flexDirection: "column",
          padding: 3,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Toolbar />
        <Box
          sx={{
            flexGrow: 1,
            overflow: "auto", // Prevents scrollbars in the entire layout
          }}
        >
          <Typography variant="h4">Dynamic Content</Typography>
          <Typography>
            This area updates based on navigation actions. Adjust its content
            dynamically as per your app's requirements.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
