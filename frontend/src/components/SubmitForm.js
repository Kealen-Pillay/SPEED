import React from "react";
import { Typography, Box, TextField } from "@mui/material";

export const SubmitForm = () => {
  return (
    <>
      <Box>
        <Typography sx={{}}>Submit Article</Typography>
        <TextField variant="outlined" label="Title" />
        <TextField variant="outlined" label="Author" />
        <TextField variant="outlined" label="DOI" />
        <TextField variant="outlined" label="Journal Name" />
        <TextField variant="outlined" label="Volume" />
        <TextField variant="outlined" label="Number" />
        <TextField variant="outlined" label="Title" />
      </Box>
    </>
  );
};
