import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Track from "./Track";
import Error from "./Error";
import LoadingSpinner from "./LoadingSpinner";
const Results = ({ data, loading, error }) => {
  if (loading) return <LoadingSpinner />;
  if (error.state) return <Error msg={error.msg} />;
  const TrackList = data?.track_list || [];
  return (
    <Box textAlign="center" mb={3}>
      <Typography variant="h2" mb={10}>
        Top results
      </Typography>
      <Grid container rowGap={3} justifyContent="stretch">
        {TrackList.length &&
          TrackList.map((track, i) => {
            return (
              <Grid item lg={4} sm={6} xs={12} key={i}>
                <Track track={track.track} />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default Results;
