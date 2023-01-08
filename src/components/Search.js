import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Search = ({ setTrackSearch }) => {
  const [search, setSearch] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setTrackSearch(search);
    setSearch("");
  };
  return (
    <Box
      sx={{
        mx: "auto",
        maxWidth: { xs: "70vw", md: "50vw" },
        border: "1px solid #000",
        textAlign: "center",
        p: "40px 20px",
        my: "30px",
        borderRadius: "20px",
        backgroundColor: "white",
      }}
    >
      <Typography variant="h6" mb="20px">
        Search for songs
      </Typography>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onSubmit={submitHandler}
      >
        <TextField
          type="text"
          label="search here"
          placeholder="type song name"
          fullWidth
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ p: "15px 20px", ml: "5px" }}
        >
          search
        </Button>
      </form>
    </Box>
  );
};

export default Search;
