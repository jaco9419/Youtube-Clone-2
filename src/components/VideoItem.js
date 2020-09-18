import React from "react";

import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12} >
      <Paper
        className="video-item"
        onClick={() => onVideoSelect(video)}
      >
        <img
          className="thumbnail"
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <Typography className="video-item-description">
          <b className="video-item-description">{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
