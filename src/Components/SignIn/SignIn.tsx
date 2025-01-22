import { Box, Button, TextField, Typography, InputAdornment, IconButton, FormControlLabel, Checkbox } from "@mui/material";
import AuthLayout from "../../AuthLayout";
import APP_LOGO from "../../assets/Syntrack_logo_full.svg";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  const mockApiCall = async (values: { email: string; password: string }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (values.email === "user@example.com" && values.password === "Password123!") {
          resolve(true);
        } else {
          reject(false);
        }
      }, 1000);
    });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Enter a valid email.")
        .required("Required.")
        .max(320, "Exceeds limit."),
      password: Yup.string()
        .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{12,20}$)/, "A number, symbol and at least 12 characters.")
        .required("Required.")
        .max(20, "Exceeds limit."),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        await mockApiCall(values);
        toast.success("Login successful! Welcome back.");
        setTimeout(() => navigate("/home"), 2000);
      } catch {
        toast.error("Incorrect Credentials; login Unsuccessful.");
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <AuthLayout>
      <ToastContainer />
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
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            margin="normal"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <FormControlLabel
              control={<Checkbox name="rememberMe" color="primary" />}
              label={
                <Typography sx={{ color: "grey", fontSize: 14 }}>
                  Remember Me
                </Typography>
              }
              sx={{ marginLeft: "0" }}
            />
            <Typography
              sx={{ fontSize: 13, color: "grey", cursor: "pointer" }}
              onClick={() => toast.info("Forgot password clicked")}
            >
              Forgot Password?
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "10px" }}
            type="submit"
            disabled={!(formik.isValid && formik.dirty) || isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>
        </form>
      </Box>
    </AuthLayout>
  );
};

export default SignIn;
