import { Box, Button, TextField, Typography, InputAdornment, IconButton, FormControlLabel, Checkbox } from "@mui/material";
import AuthLayout from "../../AuthLayout";
import APP_LOGO from "../../assets/Syntrack_logo_full.svg";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState(""); 
  const [showPassword, setShowPassword] = useState(false); 
  const [rememberMe, setRememberMe] = useState(false); 

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword); 
  };

  const handleMouseDownPassword = (event: React.MouseEvent) => {
    event.preventDefault(); 
  };

  const handleRememberMeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(event.target.checked); 
  };

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
          Sign In
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            alignSelf: "flex-start",
            color: "grey",
            fontSize: 13,
          }}
        >
          Enter your registered Email address and password that you received in
          email to sign in.
        </Typography>
        <TextField label="Email" fullWidth margin="normal" />
        
        {/* Password field with Eye Icon toggle */}
        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Handle password input
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={handleRememberMeChange}
                name="rememberMe"
                color="primary"
              />
            }
            label={<Typography sx={{ color: 'grey', fontSize: 14 }}>Remember Me</Typography>} // Grey label
            sx={{ marginLeft: "0" }}
          />
          <Typography
            sx={{ fontSize: 13, color: "grey", cursor: "pointer" }}
            onClick={() => alert("Forgot password clicked")}
          >
            Forgot Password?
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "10px" }}
          onClick={() => navigate("/home")}
        >
          Sign In
        </Button>
        
        {/* Remember Me and Forgot Password on the same line */}
    
      </Box>
    </AuthLayout>
  );
};

export default SignIn;
