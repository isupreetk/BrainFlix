import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import Form from "./components/Form/Form";
import Comment from "./components/Comment/Comment";

import videoDetailsJSON from "./assets/data/video-details.json"

function App() {

  // const [ videoDetails, setVideoDetails ] = useState(videoDetailsJSON);
  const [ selectedVideoDetail, setSelectedVideoDetail ] = useState(videoDetailsJSON[0]);

  return (
    <div className="App">
      <Header />
      <Video selectedVideoDetail={selectedVideoDetail} />
      <Form />
      <Comment selectedVideoDetail={selectedVideoDetail} />
      
    </div>
  );
}

export default App;
