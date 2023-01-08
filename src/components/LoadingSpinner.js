import { Box, CircularProgress } from "@mui/material";
const LoadingSpinner = () => {
  return (
    <Box
      width="50%"
      sx={{
        m: "20px auto",
        textAlign: "center",
        padding: "60px",
        borderRadius: "20px",
      }}
    >
      <CircularProgress color="warning" size="100px" />
    </Box>
  );
};

export default LoadingSpinner;
