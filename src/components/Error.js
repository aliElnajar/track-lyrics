import {
  Alert,
  AlertTitle,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Error = ({ msg, home }) => {
  return (
    <Alert severity="error" sx={{ m: "20px auto", maxWidth: "70vw" }}>
      <AlertTitle>error</AlertTitle>
      <Stack spacing={1} justifyContent="center" ml="40px">
        <Typography>{msg || "Something went wrong!"}</Typography>
        <Stack direction={{ xs: "column", md: "row" }} spacing={1} p="10px">
          <Link to="/" style={{ textDecoration: "none" }}>
            {home ? (
              <Button variant="contained" color="error" sx={{ mr: "10px" }}>
                back home
              </Button>
            ) : null}
          </Link>
          <Button
            variant="contained"
            color="warning"
            onClick={() => window.location.reload()}
          >
            Refresh the page
          </Button>
        </Stack>
      </Stack>
    </Alert>
  );
};

export default Error;
