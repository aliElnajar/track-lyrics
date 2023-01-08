import { Button, Divider, Paper, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Error from "../components/Error";
import LoadingSpinner from "../components/LoadingSpinner";
import useFetch from "../hooks/useFetch";
const TrackLyrics = () => {
  const { id } = useParams();
  const { data, error, loading, requestStatus } = useFetch("", id);
  console.log(requestStatus);
  if (loading) return <LoadingSpinner />;
  if (error.state || requestStatus === 404)
    return <Error msg={error.msg} home={true} />;
  const body = data?.lyrics?.lyrics_body;
  const copyrightMessage = body?.indexOf("*");
  return (
    <Paper
      elevation={4}
      sx={{
        maxWidth: { xs: "70vw", md: "60vw", lg: "50vw" },
        m: "50px auto",
        padding: { md: "40px", xs: "30px" },
        textAlign: "center",
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained" sx={{ m: "10px auto 15px" }}>
          back
        </Button>
      </Link>
      <Typography variant="h3" mb="10px" fontStyle="italic">
        Lyrics
      </Typography>
      <Divider />
      <Typography
        sx={{ fontWeight: "bold", fontSize: { xs: "24px", md: "30px" } }}
        mt="20px"
        fontStyle="italic"
      >
        {body ? body.slice(0, copyrightMessage) : ""}
      </Typography>
    </Paper>
  );
};

export default TrackLyrics;
