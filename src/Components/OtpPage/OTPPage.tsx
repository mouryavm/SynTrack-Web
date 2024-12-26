import { Box, Button, Typography } from "@mui/material";
import AuthLayout from "../../AuthLayout";
import APP_LOGO from "../../assets/Syntrack_logo_full.svg";
import OtpInput from "./OTP";
import React, { useState } from "react";

const TimerComponent: React.FC<{ onResend: () => void }> = ({ onResend }) => {
  const [seconds, setSeconds] = useState(120); // Start at 2 minutes (120 seconds)
  const [isTimerActive, setIsTimerActive] = useState(true); // To control the timer state

  // Function to handle timer reset
  const resetTimer = () => {
    setSeconds(120); // Reset timer to 2 minutes
    setIsTimerActive(true); // Activate the timer
  };

  // Timer countdown effect
  React.useEffect(() => {
    if (seconds <= 0) {
      setIsTimerActive(false); // Stop the timer when it reaches 0
      return;
    }

    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1); // Decrease by 1 second
    }, 1000); // Update every 1 second

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [seconds]);

  // Convert seconds to mm:ss format
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {isTimerActive ? (
        <Typography sx={{ fontSize: 12, color: 'black' }}>
          Resend OTP - <span style={{ color: "#4676E9" }}>{formattedTime}</span>
        </Typography>
      ) : (
        <Typography onClick={() => { onResend(); resetTimer(); }} style={{ cursor: "pointer" }} sx={{ fontSize: 12, color: "#4676E9" }}>
          Resend OTP
        </Typography>
      )}
    </Box>
  );
};

const OTPPage: React.FC = () => {
  const handleResend = () => {
    console.log("Resend OTP clicked, restarting timer");
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
          Enter OTP
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            alignSelf: "flex-start",
            color: "grey",
            fontSize: 13,
          }}
        >
          We have sent you six digit OTP on your registered email and mobile number.
        </Typography>
        
        <Box
          style={{
            alignSelf: "flex-start",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <OtpInput />
        </Box>

        <Button variant="contained" color="primary" fullWidth>
          Continue
        </Button>
        
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15px",
            marginBottom: "10px",
            width: "100%",
          }}
        >
          <Typography sx={{ fontSize: 12, color: 'black', fontWeight: "bold" }}>
            <TimerComponent onResend={handleResend} />
          </Typography>
        </Box>
      </Box>
    </AuthLayout>
  );
};

export default OTPPage;
