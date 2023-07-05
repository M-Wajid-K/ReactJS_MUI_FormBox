import React, { useState } from "react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";

function App() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          value={inputText}
          onChange={handleInputChange}
        />
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          value={inputText}
          onChange={handleInputChange}
        />
      </Box>
      <button
        className="bg-blue-500 hover:bg-red-500 text-white font-bold
       py-2 px-4 rounded transition-colors duration-500 animate-pulse hover:text-black"
      >
        Hover me!
      </button>
    </div>
  );
}

export default App;
