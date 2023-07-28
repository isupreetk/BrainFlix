import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import HeroVideo from "./components/HeroVideo/HeroVideo";
import SelectedVideo from "./components/SelectedVideo/SelectedVideo";
import Form from "./components/Form/Form";
import Comment from "./components/Comment/Comment";
import VideoList from "./components/VideoList/VideoList";

import videoDetailsJSON from "./assets/data/video-details.json"

function App() {

  const [videoDetails, setVideoDetails] = useState(videoDetailsJSON);
  const [selectedVideoDetail, setSelectedVideoDetail] = useState(videoDetailsJSON[0]);

  function handleVideoSelection(id) {
    let newVideoSelection = videoDetails.find((video) => video.id === id)
    setSelectedVideoDetail(newVideoSelection);
  }

  return (
    <div className="App">
      <Header />
      <HeroVideo selectedVideoDetail={selectedVideoDetail} />
      <div className="sidebar-container">
        <div className="sidebar sidebar--left">
          <SelectedVideo selectedVideoDetail={selectedVideoDetail} />
          <Form />
          <Comment selectedVideoDetail={selectedVideoDetail} />
        </div>

        <div className="sidebar sidebar--right">
          <VideoList videoDetails={videoDetails} selectedVideoDetail={selectedVideoDetail} handleVideoSelection={handleVideoSelection} />
        </div>
      </div>
    </div>
  );
}

export default App;
