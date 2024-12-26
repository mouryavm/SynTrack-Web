import { Box, Button, TextField, Typography } from "@mui/material";
import AuthLayout from "../../AuthLayout";
import APP_LOGO from "../../assets/Syntrack_logo_full.svg";

const ChangePassword: React.FC = () => {
  return (
    <AuthLayout>
      <Box sx={{ padding: 10 }}>
        <img
          src={APP_LOGO}
          alt="app logo"
          style={{
            alignSelf: "flex-start",
            marginBottom: "20px",
          }}
        />
        <Typography
          variant="subtitle1"
          sx={{
            alignSelf: "flex-start",
            fontWeight: "bold",
          }}
        >
          Change your Password
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            alignSelf: "flex-start",
            color: "grey",
            fontSize: 13,
          }}
        >
         Create a Secure Password: Use at least 12 characters, including letters, numbers, and special symbols.
        </Typography>
        
        <TextField label="New Password" type="password" fullWidth margin="normal" />
        <TextField label="Confirm Password" type="password" fullWidth margin="normal" />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "20px" }}
        >
          Set Password
        </Button>
      </Box>
    </AuthLayout>
  );
};

export default ChangePassword;
