import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import SelectedVideo from "./components/SelectedVideo/SelectedVideo";
import Form from "./components/Form/Form";
import Comment from "./components/Comment/Comment";
import VideoList from "./components/VideoList/VideoList";

import videoDetailsJSON from "./assets/data/video-details.json"

function App() {

  const [ videoDetails, setVideoDetails ] = useState(videoDetailsJSON);
  const [ selectedVideoDetail, setSelectedVideoDetail ] = useState(videoDetailsJSON[0]);

  return (
    <div className="App">
      <Header />
      <SelectedVideo selectedVideoDetail={selectedVideoDetail} />
      <Form />
      <Comment selectedVideoDetail={selectedVideoDetail} />
      <VideoList videoDetails={videoDetails} selectedVideoDetail={selectedVideoDetail} />
    </div>
  );
}

export default App;
