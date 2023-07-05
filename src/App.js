import React, { useState } from "react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Perform login logic here
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-4 rounded shadow-md w-72 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign in </h2>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { my: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            className="mb-4"
          />
          <TextField
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={handlePasswordChange}
            className="mb-4"
          />
        </Box>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold
          py-2 px-4 rounded-full transition-colors duration-500 animate-pulse
          hover:text-black flex items-center justify-center w-full"
          onClick={handleLogin}
        >
          <span className="flex items-center justify-center">
            Sign In
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 ml-2"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}

export default App;
