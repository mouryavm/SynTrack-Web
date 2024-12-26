import React, { useState } from 'react';

const OtpInput: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    const newOtp = [...otp];
    if (/^[0-9]$/.test(value)) {
      newOtp[index] = value;
    }
    setOtp(newOtp);

    // Focus the next input field after typing
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`) as HTMLInputElement;
      nextInput?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      // Move to the previous input if the current one is empty
      const prevInput = document.getElementById(`otp-input-${index - 1}`) as HTMLInputElement;
      prevInput?.focus();
    }
    if (e.key === 'Backspace' && otp[index] !== '') {
      // Clear the current input if backspace is pressed
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>, index: number) => {
    // Ensure only digits are pasted
    const pasteData = e.clipboardData.getData('text').replace(/\D/g, '');
    const newOtp = [...otp];
    const maxLength = 6;

    for (let i = 0; i < pasteData.length && i < maxLength; i++) {
      newOtp[i] = pasteData[i];
    }
    setOtp(newOtp);
    // Focus on the next input field after pasting
    if (pasteData.length < maxLength) {
      const nextInput = document.getElementById(`otp-input-${pasteData.length}`) as HTMLInputElement;
      nextInput?.focus();
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
      {otp.map((digit, index) => (
        <input
          key={index}
          id={`otp-input-${index}`}
          type="text"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={(e) => handlePaste(e, index)}
          maxLength={1}
          style={{
            width: '40px',
            height: '40px',
            fontSize: '20px',
            textAlign: 'center',
            backgroundColor: 'white',  // White background color
            border: '1px solid #ccc',  // Light gray border
            borderRadius: '4px',       // Rounded corners
            boxShadow: 'none',         // Remove any shadow
            outline: 'none',           // Remove outline on focus
            color: 'black',            // Black text color
            caretColor: 'black',       // Black cursor color
            transition: 'border-color 0.3s', // Smooth transition on focus
          }}
        />
      ))}
    </div>
  );
};

export default OtpInput;
