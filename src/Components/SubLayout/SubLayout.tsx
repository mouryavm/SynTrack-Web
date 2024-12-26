import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Avatar,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidthOpen = 240;
const drawerWidthCollapsed = 70;

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleSidebarToggle = () => setIsSidebarOpen(!isSidebarOpen);
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleProfileMenuClose = () => setAnchorEl(null);

  const menuItems = [
    { icon: <DashboardIcon />, label: "Dashboard" },
    { icon: <PersonIcon />, label: "Onboarding" },
    { icon: <DescriptionIcon />, label: "Order Management" },
  ];

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <CssBaseline />

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: isSidebarOpen ? drawerWidthOpen : drawerWidthCollapsed,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: isSidebarOpen ? drawerWidthOpen : drawerWidthCollapsed,
            boxSizing: "border-box",
            transition: "width 0.3s ease",
            overflow: "hidden", // No scrollbars
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {/* Sidebar Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: isSidebarOpen ? "space-between" : "center",
            p: 2,
            borderBottom: "1px solid #ddd",
          }}
        >
          <IconButton onClick={handleSidebarToggle}>
            <MenuIcon />
          </IconButton>
          {isSidebarOpen && (
            <Typography variant="h6" noWrap sx={{ ml: 1 }}>
              SynTrack
            </Typography>
          )}
        </Box>

        {/* Sidebar Menu */}
        <List
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {menuItems.map((item, index) => (
            <ListItemButton key={index} sx={{ px: isSidebarOpen ? 2 : 1 }}>
              <ListItemIcon sx={{ minWidth: 0, mr: isSidebarOpen ? 3 : "auto" }}>
                {item.icon}
              </ListItemIcon>
              {isSidebarOpen && <ListItemText primary={item.label} />}
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          overflow: "hidden",
          transition: "margin-left 0.3s ease",
          marginLeft: isSidebarOpen ? `${drawerWidthOpen}px` : `${drawerWidthCollapsed}px`,
        }}
      >
        {/* Top Bar */}
        <AppBar
          position="relative"
          elevation={0}
          color="inherit"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: "#ffffff",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src="/path-to-logo.jpg"
                alt="Logo"
                style={{ height: 40, marginRight: 16 }}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton>
                <Badge badgeContent={4} color="primary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton onClick={handleProfileMenuOpen}>
                <Avatar alt="Profile Picture" src="/path-to-avatar.jpg" />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleProfileMenuClose}
              >
                <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleProfileMenuClose}>
                  <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Box
          sx={{
            flexGrow: 1,
            p: 3,
            overflow: "auto",
            backgroundColor: "#f7f8fa",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Welcome to SynTrack
          </Typography>
          <Typography>
            This is the main content area. Add your widgets, charts, or other components here.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AppLayout;
