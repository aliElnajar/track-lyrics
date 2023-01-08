import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Track = ({ track }) => {
  const {
    track_id: id,
    artist_name: artist,
    track_name: name,
    track_share_url: img,
  } = track;
  return (
    <Link to={`/${id}`} style={{ color: "inherit", textDecoration: "none" }}>
      <Card sx={{ maxWidth: 345, height: "350px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://images.unsplash.com/photo-1485579149621-3123dd979885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {artist}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" sx={{ marginTop: "auto" }}>
            lyrics
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
};

export default Track;
