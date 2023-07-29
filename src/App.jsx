import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import HeroVideo from "./components/HeroVideo/HeroVideo";
import SelectedVideo from "./components/SelectedVideo/SelectedVideo";
import Form from "./components/Form/Form";
import Comment from "./components/Comment/Comment";
import VideoList from "./components/VideoList/VideoList";

import videoDetailsJSON from "./assets/data/video-details.json";
import videosJSON from "./assets/data/videos.json";

function App() {

  const [videos, setVideos] = useState(videosJSON);
  const [videoDetails, setVideoDetails] = useState(videoDetailsJSON)

  const [selectedVideoDetail, setSelectedVideoDetail] = useState(videoDetailsJSON[0]);

  function handleVideoSelection(id) {
    let newVideoSelection = videoDetails.find((video) => video.id === id)
    setSelectedVideoDetail(newVideoSelection);
  }

  function formatDateDDMMYYYY(date) {
    let formattedDate = new Date(date).toDateString();
    return formattedDate;
  }

  return (
    <div className="App">
      <Header />
      <HeroVideo selectedVideoDetail={selectedVideoDetail} />
      <div className="sidebar-container">
        <div className="sidebar sidebar--left">
          <SelectedVideo selectedVideoDetail={selectedVideoDetail} formatDateDDMMYYYY={formatDateDDMMYYYY} />
          <Form />
          <Comment selectedVideoDetail={selectedVideoDetail} formatDateDDMMYYYY={formatDateDDMMYYYY} />
        </div>

        <div className="sidebar sidebar--right">
          <VideoList videos={videos} selectedVideoDetail={selectedVideoDetail} handleVideoSelection={handleVideoSelection} />
        </div>
      </div>
    </div>
  );
}

export default App;