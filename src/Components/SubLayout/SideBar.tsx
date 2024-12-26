import React from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Box, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Logo Section */}
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" fontWeight="bold" color="primary">
            SynTrack
          </Typography>
        </Box>

        {/* Navigation Links */}
        <List>
          <ListItemButton selected>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Onboarding" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Order Management" />
          </ListItemButton>
        </List>

        {/* Bottom Section */}
        <Box sx={{ mt: 'auto', textAlign: 'center', p: 2 }}>
          <img
            src="/path-to-bottom-image.jpg"
            alt="Help Illustration"
            style={{ width: '100%', height: 'auto', marginBottom: 8 }}
          />
          <Typography variant="body2" color="primary">
            Need Help?
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
