import React from "react";
import { Grid } from "@material-ui/core";
import { SearchBar, VideoDetail, VideoList } from "./components";
import youtube from "./api/youtube";
import logo from "./img/youtube-logo.svg";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.handleSubmit(
      "latin america nature videos hd"
    );
  }

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet", //to return our videos
        maxResults: 5,
        key: "AIzaSyBfpJPs3SsvVSRYVDCUNKPTa-b6lV-tsoA",
        // q is default for query in the youtube api
        q: searchTerm,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <Grid justify="center" container spacing={9}>
        <Grid item xs={12}>
        <img src={logo} alt="youtube-logo" className="logo"></img>
          <Grid container spacing={3}>
            <Grid item xs={7}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={7}>
              <VideoDetail videos={selectedVideo} />
            </Grid>
            <Grid item xs={5}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
